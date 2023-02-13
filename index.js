
const fs = require('fs');

// fs.writeFile("new.txt","one two three",function(err)

// fs.writeFile('students.txt','[]',function(err){
   
//         console.log('file is created');
// })



/**1 - Users can add entry 

- indicates the name of entry, grade and id
 */
if(process.argv[2]=="add")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'));
    student = {};
    student.id = data.length+1 ;
    student.name = process.argv[3];
    student.grade = process.argv[4];

    data.push(student);
    fs.writeFileSync("students.txt",JSON.stringify(data));
    console.log(data)
    
}

//2 - Users Can list Entries 

else if(process.argv[2]=="list")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))

    data.forEach(student => {
        console.log(student.id);
        console.log(student.name);
        console.log(student.grade);
    });
    fs.writeFileSync("students.txt",JSON.stringify(data));

}

// 3 - Users can edit their entry through the id 

else if(process.argv[2]=="edit")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))

    //here I hold the index but better idea to hold the id 
         // student= data[parseInt( process.argv[4])-1];
    // so this code is better
    data.forEach(student => {
        if(student.id== process.argv[4]){
            student.grade= process.argv[3];
        }
        
    });
    fs.writeFileSync("students.txt",JSON.stringify(data));
    console.log(data);

}

//4 - Users can delete their entry using their id 

else if(process.argv[2]=="del")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))

    data.forEach(student => {
        if(student.id== process.argv[3]){
            data.splice(data.indexOf(student),1);
        }
    });

    fs.writeFileSync("students.txt",JSON.stringify(data));
    console.log(data);
    
}


//5-Users can sum   all grades of all students  
else if(process.argv[2]=="sum")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))
    allGrades = 0 ;
    data.forEach(student => {
        allGrades+= parseInt(student.grade);
    });

    console.log(allGrades);
    
}

else
{
    console.log('err');
}
