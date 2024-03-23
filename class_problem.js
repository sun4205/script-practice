const iveMembers = [
    {name:'진',
    year:1992,
},
{name:'영',
year:1992,
},
{name:'에',
year:1992,
},
{name:'구',
year:1992,
},
{name:'숙',
year:1992,
},
]

const btsMembers = [
    {name:'공',
    year:1992,
},
{name:'웅',
year:1992,
},
{name:'순',
year:1992,
},
{name:'동',
year:1992,
},
{name:'국',
year:1992,
},
]


class Country{
    name;
    idolgroups;

    constructor(name,idolgroups){
        this.name = name;
        this.idolgroups = idolgroups;
    }
}

class IdolGroup{
    name;
    members;

    constructor(name,members){
        this.name = name;
        this.members = members;
    }
}

class Idol{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

}

class FemaleIdol extends Idol{
    sing(){
        return `${this.name}이 노래를 합니다`;
    }
}

class MaleIdol extends Idol{
    dance(){
        return `${this.name}이 춤을 춥니다`;
    }
}

const CIveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'],x['year']),
    )

    console.log(CIveMembers);

const cBtsMembers = btsMembers.map(
    (x) => new MaleIdol(x['name'],x['year']),
)

console.log(cBtsMembers);

const iveGroup = new IdolGroup(
    '아이브',
    CIveMembers,
)
console.log(iveGroup);

const btsGroup = new IdolGroup(
    'BTS',
    cBtsMembers,
)
console.log(btsGroup); 

