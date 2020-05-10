function lineBrickBlock(){
    for(let i = 0; i < 17; i++){
        document.getElementById('line-bricks-top').innerHTML +=
        `<img src='../assets/images/backgrounds/brick.png' />`
    }

    for(let i = 0; i < 17; i++){
        document.getElementById('line-bricks-bottom').innerHTML +=
        `<img src='../assets/images/backgrounds/brick.png' />`
    }
}

export default lineBrickBlock