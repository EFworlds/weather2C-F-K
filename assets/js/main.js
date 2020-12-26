
    
function to_f(){
    if(fBtn.classList.contains('selected')){
        return;
    }
    fBtn.classList.add('selected');
    if(cBtn.classList.contains('selected')){
        cBtn.classList.remove('selected');
        //fBtn.classList.add('selected');

       let tags = document.querySelectorAll('.temperature');

        //console.log(tags); 
        for(let item of tags){
            let t = item.innerHTML;
            //console.log(t);
            t = parseInt(t);
            t = t * 1.8 + 32;
            t = Math.round(t);
            item.innerHTML = `${t}° F` ;
        }
    }
    if(kBtn.classList.contains('selected')){
        kBtn.classList.remove('selected');
       // fBtn.classList.add('selected');
        //(0 K − 273,15) × 9/5 + 32
       let tags = document.querySelectorAll('.temperature');

        //console.log(tags); 
        for(let item of tags){
            let t = item.innerHTML;
            //console.log(t);
            t = parseInt(t);
            t = (t - 273) * (9/5) + 32;
            t = Math.round(t);
            item.innerHTML = `${t}° F` ;
        }
    }
}

function to_c(){
    if(cBtn.classList.contains('selected')){
        return;
    }
    cBtn.classList.add('selected');
    if(fBtn.classList.contains('selected')){    
       // cBtn.classList.add('selected');
        fBtn.classList.remove('selected');

       let tags = document.querySelectorAll('.temperature');

        //console.log(tags); 
        for(let item of tags){
            let t = item.innerHTML;
            //console.log(t);
            t = parseInt(t);
            t = (t - 32) / 1.8;
            t = Math.round(t);
            item.innerHTML = `${t}° C` ;
        }
    }
    if(kBtn.classList.contains('selected')){    
       // cBtn.classList.add('selected');
        kBtn.classList.remove('selected');

        let tags = document.querySelectorAll('.temperature');

        //console.log(tags); 
        for(let item of tags){
            let t = item.innerHTML;
            //console.log(t);
            t = parseInt(t);
            t = t - 273;
            //t = Math.round(t);
            item.innerHTML = `${t}° C` ;
        }
    }

}

function to_k(){
    if(kBtn.classList.contains('selected')){
        return;
    }
    kBtn.classList.add('selected');
    if(cBtn.classList.contains('selected')){    
       // kBtn.classList.add('selected');
        cBtn.classList.remove('selected');

        let tags = document.querySelectorAll('.temperature');

        //console.log(tags); 
        for(let item of tags){
            let t = item.innerHTML;
            //console.log(t);
            t = parseInt(t);
            t = t + 273;
            //t = Math.round(t);
            item.innerHTML = `${t}° K` ;
        }
    }
    if(fBtn.classList.contains('selected')){ 
       // kBtn.classList.add('selected');
        fBtn.classList.remove('selected');

        let tags = document.querySelectorAll('.temperature');

        //console.log(tags); 
        for(let item of tags){
            let t = item.innerHTML;
            //console.log(t);
            t = parseInt(t);
            t = (t - 32) * (5/9) + 273;
            t = Math.round(t);
            item.innerHTML = `${t}° K` ;
        }
    }
}


