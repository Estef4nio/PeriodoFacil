function isDisciplinasPage() {
  const path = window.location.pathname;
  return path === '/disciplinas/new' || path.startsWith('/disciplinas/') && path.endsWith('/edit');
}

function initializeTopics()
{
  if(isDisciplinasPage()) {
    const topicosFieldsDiv = document.getElementById('topicos_fields');

    const editIconSvg = `
      <svg class="custom-input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4.00023H4C3.46957 4.00023 2.96086 4.21094 2.58579 4.58601C2.21071 4.96109 2 5.46979 2 6.00023V20.0002C2 20.5307 2.21071 21.0394 2.58579 21.4144C2.96086 21.7895 3.46957 22.0002 4 22.0002H18C18.5304 22.0002 19.0391 21.7895 19.4142 21.4144C19.7893 21.0394 20 20.5307 20 20.0002V13.0002M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    function handleTopicoInputChange(event) {
      const inputFields = topicosFieldsDiv.querySelectorAll('.topico-nome');
      const lastInputField = inputFields[inputFields.length - 1];
  
      if (lastInputField.value.trim() !== '') {
        addNewTopicoField();
      }

      // Handle removal of extra empty input fields
      inputFields.forEach((inputField, index) => {
        const nestedFieldDiv = inputField.closest('.nested-fields');
        if (inputField.value.trim() === '' && index !== inputFields.length - 1) {

          const destroyField = nestedFieldDiv.querySelector('input[name*="_destroy"]');
          if (destroyField) {
            destroyField.value = '1'; // Mark it for destruction
            nestedFieldDiv.style.display = 'none'; // Hide the field
          } else nestedFieldDiv.remove(); // For new, unsaved fields, simply remove them
          
        }
      });
    }
  
    function addNewTopicoField() {
      const topicoIndex = topicosFieldsDiv.querySelectorAll('.nested-fields').length;
  
      const newTopicoDiv = document.createElement('div');
      newTopicoDiv.classList.add('nested-fields', 'field-with-icon');
  
      newTopicoDiv.innerHTML = `
      ${editIconSvg}
      <input type="text" name="disciplina[topicos_attributes][${topicoIndex}][nome]" required="required" autofocus="autofocus" autocomplete="topico" placeholder="Conteúdo Programático" class="custom-input topico-nome">
      `;
  
      topicosFieldsDiv.appendChild(newTopicoDiv);
    }
  
    // Initialize: Add one input field if there are none
    if (topicosFieldsDiv.querySelectorAll('.nested-fields').length === 0) {
      addNewTopicoField();
    }
  
    // Event delegation to handle input change on dynamically added fields
    topicosFieldsDiv.addEventListener('input', handleTopicoInputChange);
    handleTopicoInputChange();
  }
}

document.addEventListener('turbo:load', initializeTopics);