//let arr = [];
class shiritori 
{
    constructor(arr)
    {
        this.arr=arr || [];
      //  this.wing = this.arr[arr.length-1]
    }
    get lastElement()
    {
        return this.arr[this.arr.length-1].charAt(this.arr[this.arr.length-1].length-1)
    }
    play(word)
    {
        if(this.arr.length === 0)
        {
            this.arr.push(word)
            console.log(this.arr)
        }
        else if(word.charAt(0) === this.lastElement)
        {
            if(this.arr.includes(word) === true)
            {
                console.log(`${word} already exist. Game-Over`)
            }
            else
            {
                this.arr.push(word)
                console.log(this.arr);
            }
        }
        else
        {
           // console.log('Letter DoesNot Match with the last letter of the word')
            console.log(`${word} Does Not Start With ${this.lastElement}`)
           this.restart();
        }
    }
    get words()
    {
        console.log(this.arr)
    }
    restart()
    {
        this.arr=[]
        //this.arr.splice(0,this.arr.length);
        console.log('Game Restarted');
    }
}

const gameS = new shiritori()

gameS.play('animal')
gameS.play('lazy')
gameS.play('yellow')
gameS.play('byee')