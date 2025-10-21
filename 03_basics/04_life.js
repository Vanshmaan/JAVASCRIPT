// Immediately Invoked Function Expression (IIFE) to create a new scope

function chai(){
    console.log(`DB Connected`);
}

chai(); // DB Connected

(function chai(){
    console.log(`DB Connected`);
})(); // DB Connected this is used to avoid polluting global scope

