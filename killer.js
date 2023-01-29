function killer(suspectInfo, dead) {

    for (const [key, value] of Object.entries(suspectInfo)){

        let count=0

        for(let i in dead){
            if(i in value){count++}
        }
        if(dead.length===count){return key}
    }
}
