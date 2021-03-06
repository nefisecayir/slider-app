//** PREVIOUS APP THAT HAS AN ERR0R */


var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '1000', //* 1 saniye
    random : false //*rastgele slayt yapmaz
}

showSlide(index);


init(settings);




document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    //* fonksiyonu index numarası kadar döndürür.
    console.log(index);
        //* konsola sol tuşa bastığımızda index değerlerini bir azaltarak yazar.
});



document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
    //* konsola sağ tuşa bastığımızda index değerlerini bir arttırarak yazar.
    
});

 
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
        //* mouse la ikonun üstüne geldiğimizde slayt durur.
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
    //* mouse la ikonun üstünden ayrıldığımızda slayt tekrar devam eder.
});



function init(settings){
    // **setTimeout //*belirli bir süre sonra başlayıp biter.

    var prev;
 
    interval = setInterval(function(){
        //*setInterval, clearInterval ile durdurmadığımız sürece sürekli devam eder
        if(settings.random){
            //* random index gönderir.
            do{
            index = Math.floor(Math.random() * slaytCount);
                //* 0'dan slaytCounta kadar sayı random üretir
            }while(index == prev)
            prev = index;
            //* bir sayının yine aynısı konsolda üretilmez.

    
        }else{
            //* artan index gönderir.
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
                //* son slayta geldiğimizde indexi 0 yapıp başa alır.
            
        }
        // missing --> showSlide(index);
      
    },settings.duration)

}





function showSlide(i){
    index = i;

    if (i<0){
        index = slaytCount - 1;
            //* eğer sıfırfan küçük bir değer gelirse bizi son index elemanına döndürür.
    }if(i >= slaytCount){
        index = i-index;
            //* eğer 4 'den büyük bir değer gelirse 0'a çevirir.
    }

    document.querySelector('.card-title').textContent = models[index].name;
    //* class'ı card title olan elemanın text bilgisine ulaşıp adını index ile değiştirdik.


    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    //* source olarak 2.modelin img'sini kullandık.


    document.querySelector('.card-link').setAttribute('href',models[index].link);
    //* class'ı card link olan elemana ulaşıp hrefini tanımladığımız link olarak ekledik.
}









    
