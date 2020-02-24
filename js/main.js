
      var showingSourceCode = false;
      var insInEditMode = true;

      function enableEditMode(){
        richTextField.document.designMode = 'On';
      }
      function execCmd(command){
        richTextField.document.execCommand(command, false, null);
      }

      function execCommandWithArg(command, arg){
        richTextField.document.execCommand(command, false, arg);
      }
      // Função responsável por obter o código da página;
      function toggleSource(){
          if (showingSourceCode){
            richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
            showingSourceCode = false;
          }else{
            showingSourceCode = true;
              richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
          }
      }
      //Função responsavel por Habilitar e Desabilitar o EdditMode;
      function toggleEdit(){
        if (insInEditMode){
          richTextField.document.designMode = 'Off';
          insInEditMode = false;
        }else{
          richTextField.document.designMode = 'On';
          insInEditMode = true;
        }
      }
