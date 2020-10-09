function getPokemon() {

    var pokeName = document.getElementById("inputField").value;

    var url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`;
    var urltype1
    var urltype2

    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        //Pokemon Picture
        var picURL = res.sprites.front_default;
        document.getElementById("picture").src = picURL

        //Pokemon Name
        var name = res.species.name
        document.getElementById("name").innerText = "Name: " + name


        //Pokemon Type 1
        var idk = document.getElementById("type1")

        var newLabel = document.createElement("label")
        var typeName = res.types[0].type.name
        newLabel.innerHTML = "Type 1: " + typeName

        switch (res.types[0].type.name) {
            case "psychic":
                newLabel.setAttribute('class', 'psychic')
                document.getElementById("name").setAttribute('class','psychic')
                break;
            case "ghost":
                newLabel.setAttribute('class', 'ghost')
                document.getElementById("name").setAttribute('class','ghost')
                break;
            case "dark":
                newLabel.setAttribute('class', 'dark')
                document.getElementById("name").setAttribute('class','dark')
                break;
            case "fairy":
                newLabel.setAttribute('class', 'fairy')
                document.getElementById("name").setAttribute('class','fairy')
                break;
            case "dragon":
                newLabel.setAttribute('class', 'dragon')
                document.getElementById("name").setAttribute('class','dragon')
                break;
            case "steel":
                newLabel.setAttribute('class', 'steel')
                document.getElementById("name").setAttribute('class','steel')
                break;
            case "rock":
                newLabel.setAttribute('class', 'rock')
                document.getElementById("name").setAttribute('class','rock')
                break;
            case "ground":
                newLabel.setAttribute('class', 'ground')
                document.getElementById("name").setAttribute('class','ground')
                break;
            case "flying":
                newLabel.setAttribute('class', 'flying')
                document.getElementById("name").setAttribute('class','flying')
                break;
            case "electric":
                newLabel.setAttribute('class', 'electric')
                document.getElementById("name").setAttribute('class','electric')
                break;
            case "water":
                newLabel.setAttribute('class', 'water')
                document.getElementById("name").setAttribute('class','water')
                break;
            case "fire":
                newLabel.setAttribute('class', 'fire')
                document.getElementById("name").setAttribute('class','fire')
                break;
            case "grass":
                newLabel.setAttribute('class', 'grass')
                document.getElementById("name").setAttribute('class','grass')
                break;
            case "normal":
                newLabel.setAttribute('class', 'normal')
                document.getElementById("name").setAttribute('class','normal')
                break;
            case "fighting":
                newLabel.setAttribute('class', 'fighting')
                document.getElementById("name").setAttribute('class','fighting')
                break;
            case "poison":
                newLabel.setAttribute('class', 'poison')
                document.getElementById("name").setAttribute('class','poison')
                break;
            case "ice":
                newLabel.setAttribute('class', 'ice')
                document.getElementById("name").setAttribute('class','ice')
                break;
            case "bug":
                newLabel.setAttribute('class', 'bug')
                document.getElementById("name").setAttribute('class','bug')
                break;
        }
        idk.innerHTML = "";
        idk.appendChild(newLabel)

        //Pokemon Type 2
        if (res.types.length == 2) {
            var idk2 = document.getElementById("type2")

            var newLabel2 = document.createElement("label")
            newLabel2.innerHTML = "Type 2: " + res.types[1].type.name

            switch (res.types[1].type.name) {
                case "psychic":
                    newLabel2.setAttribute('class', 'psychic')
                    break;
                case "ghost":
                    newLabel2.setAttribute('class', 'ghost')
                    break;
                case "dark":
                    newLabel2.setAttribute('class', 'dark')
                    break;
                case "fairy":
                    newLabel2.setAttribute('class', 'fairy')
                    break;
                case "dragon":
                    newLabel2.setAttribute('class', 'dragon')
                    break;
                case "steel":
                    newLabel2.setAttribute('class', 'steel')
                    break;
                case "rock":
                    newLabel2.setAttribute('class', 'rock')
                    break;
                case "ground":
                    newLabel2.setAttribute('class', 'ground')
                    break;
                case "flying":
                    newLabel2.setAttribute('class', 'flying')
                    break;
                case "electric":
                    newLabel2.setAttribute('class', 'electric')
                    break;
                case "water":
                    newLabel2.setAttribute('class', 'water')
                    break;
                case "fire":
                    newLabel2.setAttribute('class', 'fire')
                    break;
                case "grass":
                    newLabel2.setAttribute('class', 'grass')
                    break;
                case "normal":
                    newLabel2.setAttribute('class', 'normal')
                    break;
                case "fighting":
                    newLabel2.setAttribute('class', 'fighting')
                    break;
                case "poison":
                    newLabel2.setAttribute('class', 'poison')
                    break;
                case "ice":
                    newLabel2.setAttribute('class', 'ice')
                    break;
                case "bug":
                    newLabel2.setAttribute('class', 'bug')
                    break;
            }
            idk2.innerHTML = "";
            idk2.appendChild(newLabel2)
        }
        else {
            document.getElementById("type2").innerHTML = ""
        }

        //Pokemon Stats
        document.getElementById("hp").innerText = "Healh: " + res.stats[0].base_stat
        document.getElementById("attack").innerText = "Attack: " + res.stats[1].base_stat
        document.getElementById("defense").innerText = "Defense: " + res.stats[2].base_stat
        document.getElementById("specialAttack").innerText = "Special Attack: " + res.stats[3].base_stat
        document.getElementById("specialDefense").innerText = "Special Defense: " + res.stats[4].base_stat
        document.getElementById("speed").innerText = "Speed: " + res.stats[5].base_stat

        document.getElementById("hp").setAttribute('class','hp')
        document.getElementById("attack").setAttribute('class', 'atk')
        document.getElementById("defense").setAttribute('class','def')
        document.getElementById("specialAttack").setAttribute('class','spatk')
        document.getElementById("specialDefense").setAttribute('class', 'spdef')
        document.getElementById("speed").setAttribute('class','speed')

        var randomNumber = Math.floor(Math.random() * 30) + 1;
        console.log(randomNumber);
        var url2 = `https://pokeapi.co/api/v2/characteristic/${randomNumber}/`

        fetch(url2).then(res2 => res2.json()).then(res2 => {
            console.log(res2);

            document.getElementById("description").innerHTML = res2.descriptions[2].description
        })
        calculateWeaknesses(res.types[0].type.name, res.types[1].type.name)
    })
}


//Regner ud hvilke typer givende pokemon er weak, stærk og immun overfor
function calculateWeaknesses(type1, type2){
    var pokeName = document.getElementById("inputField").value;

    //Poke type API for each type the pokemon has
    var url = `https://pokeapi.co/api/v2/type/${type1}/`;
    var url2 = `https://pokeapi.co/api/v2/type/${type2}/`;

    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        fetch(url2).then(res2 => res2.json()).then(res2 => {
            console.log(res2);
            
            //Creates copies of the arrays it retrieves from the API
            var t1r = [res.damage_relations.half_damage_from]

            var t1w = [res.damage_relations.double_damage_from]

            var t2r = [res2.damage_relations.half_damage_from]

            var t2w = [res2.damage_relations.double_damage_from]

            var t1i = [res.damage_relations.no_damage_from]

            var t2i = [res2.damage_relations.no_damage_from]

            //Checks if type 1 takes double damage from something that type 2 receives ½ damage from
            for(w = 0; w < res.damage_relations.double_damage_from.length; w++){
                for(r = 0; r < res2.damage_relations.half_damage_from.length; r++){
                    if (res.damage_relations.double_damage_from[w].name == res2.damage_relations.half_damage_from[r].name){
                        t1w[0].splice(w,1)
                        t2r[0].splice(r,1) 
                    }
                }
            }

            //Same but reverse
            for(r = 0; r < res.damage_relations.half_damage_from.length; r++){
                for(w = 0; w < res2.damage_relations.double_damage_from.length; w++){
                    if (res.damage_relations.half_damage_from[r].name == res2.damage_relations.double_damage_from[w].name){
                        t1r[0].splice(r,1)
                        t2w[0].splice(w,1)
                    }
                }
            }

            //Checks if type 1 has a weakness that type 2 is immune to
            if (t2i[0].length >= 1){
                for(w = 0; w < res.damage_relations.double_damage_from.length; w++){
                    for(i = 0; i < res2.damage_relations.no_damage_from.length; i++){
                        if (res.damage_relations.double_damage_from[w].name == res2.damage_relations.no_damage_from[i].name){
                            t1w[0].splice(w,1)
                        }
                    }
                }
            }

            //Checks if type 1 resists a type that type 2 is immune to
            if (t2i[0].length >= 1){
                for(r = 0; r < res.damage_relations.half_damage_from.length; r++){
                    for(i = 0; i < res2.damage_relations.no_damage_from.length; i++){
                        if (res.damage_relations.half_damage_from[r].name == res2.damage_relations.no_damage_from[i].name){
                            t1r[0].splice(r,1)
                        }
                    }
                }
            }

            //Same but reversed
            if (t1i[0].length >= 1){
                for(r = 0; r < res2.damage_relations.half_damage_from.length; r++){
                    for(i = 0; i < res.damage_relations.no_damage_from.length; i++){
                        if (res2.damage_relations.half_damage_from[r].name == res.damage_relations.no_damage_from[i].name){
                            t2r[0].splice(r,1)
                        }
                    }
                }
            }

            //Same but reversed
            if (t1i[0].length >= 1){
                for(w = 0; w < res2.damage_relations.double_damage_from.length; w++){
                    for(i = 0; i < res.damage_relations.no_damage_from.length; i++){
                        if (res2.damage_relations.double_damage_from[w].name == res.damage_relations.no_damage_from[i].name){
                            t2w[0].splice(w,1)
                        }
                    }
                }
            }
            console.log(t1w)
            console.log(t2w)


            calculateWeaknesses2(t1w,t1r,t1i,t2w,t2r,t2i, type1, type2)

        })
    })
}

function calculateWeaknesses2(t1w,t1r,t1i,t2w,t2r,t2i, type1 ,type2){

    var url = `https://pokeapi.co/api/v2/type/${type1}/`;
    var url2 = `https://pokeapi.co/api/v2/type/${type2}/`;

    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        fetch(url2).then(res2 => res2.json()).then(res2 => {
            console.log(res2);
            
        
            //Creates lists to use as the output for the user
            var doubleWeakList = []
            var quadWeakList = []
            var immuneList = []
            var doubleResistList = []
            var quadResistList = []

            
            for(w = 0; w < res.damage_relations.double_damage_from.length; w++){
                for(i = 0; i < res2.damage_relations.double_damage_from.length; i++){
                    if (res.damage_relations.double_damage_from[w].name == res2.damage_relations.double_damage_from[i].name){
                        quadWeakList.push("4x weak to: " + res.damage_relations.double_damage_from[w].name)

                    }
                }
            }
            
            for(w = 0; w < res.damage_relations.half_damage_from.length; w++){
                for(i = 0; i < res2.damage_relations.half_damage_from.length; i++){
                    if (res.damage_relations.half_damage_from[w].name == res2.damage_relations.half_damage_from[i].name){
                        quadWeakList.push("4x resist to: " + res.damage_relations.half_damage_from[w].name)
                    }
                }
            }
            
            /*
            //Checks if both types have a common weakness
            for(i = 0; i < t1w[0].length; i++){
                for(u = 0; u < t2w[0].length; u++){
                    if (t1w[0][i].name == t2w[0][u].name){
                        quadWeakList.push("4x weak to: " + t1w[0][i].name)
                        t1w[0].splice(i,1)
                        t2w[0].splice(u,1)
                    }
                }
            }*/

            //Adds weaknesses from type 1 to the list
            for(i = 0; i < t1w[0].length; i++){
                doubleWeakList.push("2x weak to: " + t1w[0][i].name)
            }
            //Same for type 2
            for(i = 0; i< t2w[0].length; i++){
                doubleWeakList.push("2x weak to: " + t2w[0][i].name)
            }
            /*
            //Checks if both types resists something
            for(i = 0; i < t1r[0].length; i++){
                for(u = 0; u < t2r[0].length; u++){
                    if (t1r[0][i].name == t2r[0][u].name){
                        quadResistList.push("4x resist to: " + t1r[0][i].name)
                        t1r[0].splice(i,1)
                        t2r[0].splice(u,1)
                    }
                }
            } */

            //Adds resists form type 1 to the list
            for(i = 0; i < t1r[0].length; i++){
                doubleResistList.push("2x resist to: " + t1r[0][i].name)
            }
            //Same for type 2
            for(i = 0; i < t2r[0].length; i++){
                doubleResistList.push("2x resist to: " + t2r[0][i].name)
            }

            for(i = 0; i < t1i[0].length; i++){
                immuneList.push("Immune to: " + t1i[0][i].name)
            }

            for(i = 0; i < t2i[0].length; i++){
                immuneList.push("Immune to: " + t2i[0][i].name)
            }

            document.getElementById("listTitle").innerText = "Weaknesses: "
            document.getElementById("listTitle2").innerText = "Resistances: "
            document.getElementById("listTitle3").innerText = "Immunities: "

            for(i = 0; i < doubleWeakList.length; i++){
                var entry = document.createElement("LI")
                var label = document.createTextNode(`${doubleWeakList[i]}`)
                switch (label.textContent) {
                    case "2x weak to: psychic":
                        entry.setAttribute('class', 'psychic')
                        break;
                    case "2x weak to: ghost":
                        entry.setAttribute('class', 'ghost')
                        break;
                    case "2x weak to: dark":
                        entry.setAttribute('class', 'dark')
                        break;
                    case "2x weak to: fairy":
                        entry.setAttribute('class', 'fairy')
                        break;
                    case "2x weak to: dragon":
                        entry.setAttribute('class', 'dragon')
                        break;
                    case "2x weak to: steel":
                        entry.setAttribute('class', 'steel')
                        break;
                    case "2x weak to: rock":
                        entry.setAttribute('class', 'rock')
                        break;
                    case "2x weak to: ground":
                        entry.setAttribute('class', 'ground')
                        break;
                    case "2x weak to: flying":
                        entry.setAttribute('class', 'flying')
                        break;
                    case "2x weak to: electric":
                        entry.setAttribute('class', 'electric')
                        break;
                    case "2x weak to: water":
                        entry.setAttribute('class', 'water')
                        break;
                    case "2x weak to: fire":
                        entry.setAttribute('class', 'fire')
                        break;
                    case "2x weak to: grass":
                        entry.setAttribute('class', 'grass')
                        break;
                    case "2x weak to: normal":
                        entry.setAttribute('class', 'normal')
                        break;
                    case "2x weak to: fighting":
                        entry.setAttribute('class', 'fighting')
                        break;
                    case "2x weak to: poison":
                        entry.setAttribute('class', 'poison')
                        break;
                    case "2x weak to: ice":
                        entry.setAttribute('class', 'ice')
                        break;
                    case "2x weak to: bug":
                        entry.setAttribute('class', 'bug')
                        break;
                }
                entry.appendChild(label)
                document.getElementById("weaknessList").appendChild(entry)
            }
            
            for(i = 0; i < quadWeakList.length; i++){
                var entry = document.createElement("LI")
                var label = document.createTextNode(`${quadWeakList[i]}`)
                switch (label.textContent) {
                    case "4x weak to: psychic":
                        entry.setAttribute('class', 'psychic')
                        break;
                    case "4x weak to: ghost":
                        entry.setAttribute('class', 'ghost')
                        break;
                    case "4x weak to: dark":
                        entry.setAttribute('class', 'dark')
                        break;
                    case "4x weak to: fairy":
                        entry.setAttribute('class', 'fairy')
                        break;
                    case "4x weak to: dragon":
                        entry.setAttribute('class', 'dragon')
                        break;
                    case "4x weak to: steel":
                        entry.setAttribute('class', 'steel')
                        break;
                    case "4x weak to: rock":
                        entry.setAttribute('class', 'rock')
                        break;
                    case "4x weak to: ground":
                        entry.setAttribute('class', 'ground')
                        break;
                    case "4x weak to: flying":
                        entry.setAttribute('class', 'flying')
                        break;
                    case "4x weak to: electric":
                        entry.setAttribute('class', 'electric')
                        break;
                    case "4x weak to: water":
                        entry.setAttribute('class', 'water')
                        break;
                    case "4x weak to: fire":
                        entry.setAttribute('class', 'fire')
                        break;
                    case "4x weak to: grass":
                        entry.setAttribute('class', 'grass')
                        break;
                    case "4x weak to: normal":
                        entry.setAttribute('class', 'normal')
                        break;
                    case "4x weak to: fighting":
                        entry.setAttribute('class', 'fighting')
                        break;
                    case "4x weak to: poison":
                        entry.setAttribute('class', 'poison')
                        break;
                    case "4x weak to: ice":
                        entry.setAttribute('class', 'ice')
                        break;
                    case "4x weak to: bug":
                        entry.setAttribute('class', 'bug')
                        break;
                }
                entry.appendChild(label)
                document.getElementById("weaknessList").appendChild(entry)
            }

            for(i = 0; i < doubleResistList.length; i++){
                var entry = document.createElement("LI")
                var label = document.createTextNode(`${doubleResistList[i]}`)
                switch (label.textContent) {
                    case "2x resist to: psychic":
                        entry.setAttribute('class', 'psychic')
                        break;
                    case "2x resist to: ghost":
                        entry.setAttribute('class', 'ghost')
                        break;
                    case "2x resist to: dark":
                        entry.setAttribute('class', 'dark')
                        break;
                    case "2x resist to: fairy":
                        entry.setAttribute('class', 'fairy')
                        break;
                    case "2x resist to: dragon":
                        entry.setAttribute('class', 'dragon')
                        break;
                    case "2x resist to: steel":
                        entry.setAttribute('class', 'steel')
                        break;
                    case "2x resist to: rock":
                        entry.setAttribute('class', 'rock')
                        break;
                    case "2x resist to: ground":
                        entry.setAttribute('class', 'ground')
                        break;
                    case "2x resist to: flying":
                        entry.setAttribute('class', 'flying')
                        break;
                    case "2x resist to: electric":
                        entry.setAttribute('class', 'electric')
                        break;
                    case "2x resist to: water":
                        entry.setAttribute('class', 'water')
                        break;
                    case "2x resist to: fire":
                        entry.setAttribute('class', 'fire')
                        break;
                    case "2x resist to: grass":
                        entry.setAttribute('class', 'grass')
                        break;
                    case "2x resist to: normal":
                        entry.setAttribute('class', 'normal')
                        break;
                    case "2x resist to: fighting":
                        entry.setAttribute('class', 'fighting')
                        break;
                    case "2x resist to: poison":
                        entry.setAttribute('class', 'poison')
                        break;
                    case "2x resist to: ice":
                        entry.setAttribute('class', 'ice')
                        break;
                    case "2x resist to: bug":
                        entry.setAttribute('class', 'bug')
                        break;
                }
                entry.appendChild(label)
                document.getElementById("resistList").appendChild(entry)
            }

            for(i = 0; i < quadResistList.length; i++){
                var entry = document.createElement("LI")
                var label = document.createTextNode(`${quadResistList[i]}`)
                switch (label.textContent) {
                    case "4x resist to: psychic":
                        entry.setAttribute('class', 'psychic')
                        break;
                    case "4x resist to: ghost":
                        entry.setAttribute('class', 'ghost')
                        break;
                    case "4x resist to: dark":
                        entry.setAttribute('class', 'dark')
                        break;
                    case "4x resist to: fairy":
                        entry.setAttribute('class', 'fairy')
                        break;
                    case "4x resist to: dragon":
                        entry.setAttribute('class', 'dragon')
                        break;
                    case "4x resist to: steel":
                        entry.setAttribute('class', 'steel')
                        break;
                    case "4x resist to: rock":
                        entry.setAttribute('class', 'rock')
                        break;
                    case "4x resist to: ground":
                        entry.setAttribute('class', 'ground')
                        break;
                    case "4x resist to: flying":
                        entry.setAttribute('class', 'flying')
                        break;
                    case "4x resist to: electric":
                        entry.setAttribute('class', 'electric')
                        break;
                    case "4x resist to: water":
                        entry.setAttribute('class', 'water')
                        break;
                    case "4x resist to: fire":
                        entry.setAttribute('class', 'fire')
                        break;
                    case "4x resist to: grass":
                        entry.setAttribute('class', 'grass')
                        break;
                    case "4x resist to: normal":
                        entry.setAttribute('class', 'normal')
                        break;
                    case "4x resist to: fighting":
                        entry.setAttribute('class', 'fighting')
                        break;
                    case "4x resist to: poison":
                        entry.setAttribute('class', 'poison')
                        break;
                    case "4x resist to: ice":
                        entry.setAttribute('class', 'ice')
                        break;
                    case "4x resist to: bug":
                        entry.setAttribute('class', 'bug')
                        break;
                }
                entry.appendChild(label)
                document.getElementById("resistList").appendChild(entry)
            }

            for(i = 0; i < immuneList.length; i++){
                var entry = document.createElement("LI")
                var label = document.createTextNode(`${immuneList[i]}`)

                switch (label.textContent) {
                    case "Immune to: psychic":
                        entry.setAttribute('class', 'psychic')
                        break;
                    case "Immune to: ghost":
                        entry.setAttribute('class', 'ghost')
                        break;
                    case "Immune to: dark":
                        entry.setAttribute('class', 'dark')
                        break;
                    case "Immune to: fairy":
                        entry.setAttribute('class', 'fairy')
                        break;
                    case "Immune to: dragon":
                        entry.setAttribute('class', 'dragon')
                        break;
                    case "Immune to: steel":
                        entry.setAttribute('class', 'steel')
                        break;
                    case "Immune to: rock":
                        entry.setAttribute('class', 'rock')
                        break;
                    case "Immune to: ground":
                        entry.setAttribute('class', 'ground')
                        break;
                    case "Immune to: flying":
                        entry.setAttribute('class', 'flying')
                        break;
                    case "Immune to: electric":
                        entry.setAttribute('class', 'electric')
                        break;
                    case "Immune to: water":
                        entry.setAttribute('class', 'water')
                        break;
                    case "Immune to: fire":
                        entry.setAttribute('class', 'fire')
                        break;
                    case "Immune to: grass":
                        entry.setAttribute('class', 'grass')
                        break;
                    case "Immune to: normal":
                        entry.setAttribute('class', 'normal')
                        break;
                    case "Immune to: fighting":
                        entry.setAttribute('class', 'fighting')
                        break;
                    case "Immune to: poison":
                        entry.setAttribute('class', 'poison')
                        break;
                    case "Immune to: ice":
                        entry.setAttribute('class', 'ice')
                        break;
                    case "Immune to: bug":
                        entry.setAttribute('class', 'bug')
                        break;
                }
                entry.appendChild(label)
                document.getElementById("immuneList").appendChild(entry)

            }
        })
    })
}