// NameSpace

/*
    Ya casi no se usan, pero se solian usar para librerias, se cometa porque ts arroja error
*/


namespace Validations {
    export const validateText = (text:string): boolean => {
        if(text.length>3){
            return true;
        }else{
            return false;
        }
    }

    export const validateDate = (myDate: Date):boolean => {
        return(isNaN(myDate.valueOf())) ? false : true;
    }
}

console.log(Validations.validateText('Sas'))