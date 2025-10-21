const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"];

// for each
coding.forEach(function(index){
    console.log(index);
}); // JavaScript Python C++ Java Ruby 

coding.forEach((index, idx) => {
    console.log(`Index is: ${idx}`, `Value is: ${index}`);
}); // Index is: 0 Value is: JavaScript etc.

const mycoding = [
    {
        languaagename: "JavaScript",
        fileextension: ".js"
    },
    {
        languaagename: "Python",
        fileextension: ".py"
    }
]
mycoding.forEach((index) => {
    console.log(`Language Name is: ${index.languaagename}`, `File Extension is: ${index.fileextension}`);
});