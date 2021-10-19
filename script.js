var models = [{      
    name : 'Bmw 418d',
    image : 'img/bmw.jpg',
    link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
},
{
    name : 'Mazda CX-3',
    image : 'img/mazda.jpg',
    link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
},
{
    name : 'Volvo S60',
    image : 'img/volvo.jpg',
    link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
},
{
    name : 'Skoda Superb',
    image : 'img/skoda.jpg',
    link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
},
{
    name : 'Honda Civic',
    image : 'img/honda.jpg',
    link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
}
];


var index = 0;
var slaytCount = models.length;
var settings = {
    duration : '1500', //* 1 saniyeye bir resimleri geçer.
    random : false  //* randoma tamam deyip rastgele slayt yapmasını sağlarız.
}
var interval;





showSlide(index);
    //* fonksiyonu index'e göre çağırıyoruz.

function showSlide(i){

    index = i;

    if (i<0){
        index = slaytCount - 1;
            //* toplamda 5 index'imiz ama 4 tane salytımız var o yüzden sıfırdan küçük olduğunda 5 den 1 çıkartıp 0'dan sonra tekrar en son slayta geliriz
    }
    if (i >= slaytCount){
        index = i - index;
            //* 4'den sonra 0 a geri döner.
    }



    document.querySelector('.card-title').textContent = models[index].name;
    //* h5'in class'ına ulaşıp text bilgisini index'te belirlediğimiz elemanın name i ile değiştirir.

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    //* img'nin class'ına ulaşıp index'te belirlediğimiz elemanın image ini alır.

    document.querySelector('.card-link').setAttribute('href', models[index].link);
    //* a'nın class'ına ulaşıp link bilgisini index'te belirlediğimiz elemanın linki ile değiştirir.
}



function init(settings){
    var prev; 
    //* setTimeout = belirli bir süre sonra başlayıp biter.
    //* setIneterval = clearInterval ile durdurmadığımız sürece sürekli devam eder.

    interval = setInterval(function(){
        //* settings'deki duration kadar devam eder.
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
                //* slayt sayısına kadar random değerler verir
            }while(index == prev)
            //* random index üretir
            prev = index;
                //* index yine kendini tekrar ettiği sürece tekrar index üretilmesini sağlarız.
        }else{
            //* ya da artan index üretir
            if(slaytCount == index+1){
                index = -1;
                    //* models length'inden fazla index olduğunda tekrar 0'a çevirip sırayla indexleri yazar.
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        
        showSlide(index);
        
    },settings.duration)
}

init(settings);



//** SLIDER CONTROLS */

//* click olayı atama
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
        //* böyle önceki fotolara geçmemizi sağlar.
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
        //* böyle sonraki fotolara geçmemizi sağlar.
    showSlide(index);
        //* bu fonksiyonda belirli bir yere kadar tanımlı olduğu için daha ileri index'leri gösteremez hata verir.
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
            //* mouse ile butonun üstüne geldiğimizde slayt durur.
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
            //* mouse ile butonun üstünden ayrıldığımızda slayt devam eder.
    })
})






































//** PREVIOUS APP THAT HAS AN ERR0R */


// var index = 0;
// var slaytCount = models.length;
// var interval;
// var settings = {
//     duration : '1000', //* 1 saniye
//     random : false //*rastgele slayt yapmaz
// }


// showSlide(index);


// init(settings);




// document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
//     index--;
//     showSlide(index);
//     //* fonksiyonu index numarası kadar döndürür.
//     console.log(index);
//         //* konsola sol tuşa bastığımızda index değerlerini bir azaltarak yazar.
// });



// document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
//     index++;
//     showSlide(index);
//     console.log(index);
//     //* konsola sağ tuşa bastığımızda index değerlerini bir arttırarak yazar.
    
// });

 
// document.querySelectorAll('.arrow').forEach(function(item){
//     item.addEventListener('mouseenter',function(){
//         clearInterval(interval);
//     })
//         //* mouse la ikonun üstüne geldiğimizde slayt durur.
// });

// document.querySelectorAll('.arrow').forEach(function(item){
//     item.addEventListener('mouseleave',function(){
//         init(settings);
//     })
//     //* mouse la ikonun üstünden ayrıldığımızda slayt tekrar devam eder.
// });



// function init(settings){
//     // **setTimeout //*belirli bir süre sonra başlayıp biter.

//     var prev;
 
//     interval = setInterval(function(){
//         //*setIneterval, clearInterval ile durdurmadığımız sürece sürekli devam eder
//         if(settings.random){
//             //* random index gönderir.
//             do{
//             index = Math.floor(Math.random() * slaytCount);
//                 //* 0'dan slaytCounta kadar sayı random üretir
//             }while(index == prev)
//             prev = index;
//             //* bir sayının yine aynısı konsolda üretilmez.

    
//         }else{
//             //* artan index gönderir.
//             if(slaytCount == index+1){
//                 index = -1;
//             }
//             showSlide(index);
//             console.log(index);
//             index++;
//                 //* son slayta geldiğimizde indexi 0 yapıp başa alır.
            
//         }
//         showSlide(index);
      
//     },settings.duration)

// }




// function showSlide(i){
//     index = i;

//     if (i<0){
//         index = slaytCount - 1;
//             //* eğer sıfırfan küçük bir değer gelirse bizi son index elemanına döndürür.
//     }if(i >= slaytCount){
//         index = i-index; ---> not index = -1 but 0 or i - index
//             //* eğer 4 'den büyük bir değer gelirse 0'a çevirir.
//     }

//     document.querySelector('.card-title').textContent = models[index].name;
//     //* class'ı card title olan elemanın text bilgisine ulaşıp adını index ile değiştirdik.


//     document.querySelector('.card-img-top').setAttribute('src', models[index].image);
//     //* source olarak 2.modelin img'sini kullandık.


//     document.querySelector('.card-link').setAttribute('href',models[index].link);
//     //* class'ı card link olan elemana ulaşıp hrefini tanımladığımız link olarak ekledik.
// }









    
