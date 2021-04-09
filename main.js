let x =  document.querySelector('#fayl');
let y = document.querySelector('#text');
x.addEventListener('change',() =>{
    let files=x.files;
    if(files.length==0) return;
    const file=files[0];
    let reader= new FileReader();
    reader.onload = (e) =>{
    const file = e.target.result;
    const lines = file.split("\r\n"); 
    y.value=lines.join(' \n');
    };
    reader.readAsText(file); 
})


