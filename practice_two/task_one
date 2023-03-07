function capuchino(size: "маленький" | "средний" | "большой",
milk: "коровье" | "банановое" | "кокосовое" | "соевое" | null = "коровье",
taste?: "ягодный"| "ванильный" | "шоколадный" | "карамельный")
{
    let itogSum = 0;
    
    switch(size){
        case("маленький"):
            itogSum+=150;
            break;
        case("средний"):
            itogSum+=180;
            break;
        case("большой"):
            itogSum+=200;
            break;
    }

    switch(milk){
        case(null || undefined || "коровье"):
            itogSum+=0;
            break;
        case("банановое"):
            itogSum+=100
            break;
        case("кокосовое"):
            itogSum+=110
            break;
        case("соевое"):
            itogSum+=130
            break;
    }

    switch(taste){
        case("ягодный"):
            itogSum+=10;
            break;
        case("ванильный"):
            itogSum+=20
            break;
        case("шоколадный"):
            itogSum+=40
            break;
        case("карамельный"):
            itogSum+=30
            break;
        case(null || undefined):
            itogSum+=0;
            break;
    }

    return itogSum;
    
}

// • Маленький на банановом с ванилью (150+100+20 = 270)
console.log(capuchino("маленький", "банановое","ванильный"));

//•	Большой на обычном с шоколадом (200+0+40 = 240)
console.log(capuchino("большой",null,"шоколадный"));

//•	Средний на соевом (180+130+0 = 310)
console.log(capuchino("средний", "соевое"));

//•	Средний на обычном (180)
console.log(capuchino("средний"));
