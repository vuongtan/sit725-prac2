const express = require('express')
const app = express()
const port = 3000

//Run node as a web server for hosting static files (html)
app.use(express.static(__dirname+"/public"))
//Function to sum two values
var SumNumber=function(num1,num2){
    var result=num1+num2
    return result
}
app.get('/', function (req, res) {       
        res.send("hello world")

    })
//Create a web service to add two numbers together
app.get('/addresult',function(req,res){
 var num1=parseInt(req.query.num1)
 var num2=parseInt(req.query.num2)
 var result= SumNumber(num1,num2)
 res.send("Sum of two input :"+result)
}
)   

//data stored into an array
class Array {  
    constructor() {   
        this.length = 0;  
        this.data = {};  
    } 
 // push an element at the end of the array.   
push=function(id,name,deposit){ 
    this.data[this.length] = new ArrayElement(id,name,deposit); 
    this.length++; 
    return this.data; 
} 

} 
class ArrayElement{
    constructor(id,name,deposit){
    this.id=id
    this.name=name
    this.deposit=deposit
    }
}
//Create a GET en point that retrieves data stored into an array
app.get('/retrievesarray',function(req,res,next){
    var flag=false
    var array=new Array()
    array.push(1,'alex',5)
    array.push(2,'sarah',5)
    array.push(3,'jim',15)   
    var id=parseInt(req.query.num1)
    for(var i=0;i<array.length;i++){
        if(id==array.data[i].id){
           res.send("id:"+array.data[i].id+"  name:"+array.data[i].name+"  deposit:"+array.data[i].deposit+"\n")
           flag=true 
           break;
        }  
    }
    if(flag==false){
        res.send("No account with this id")
    }
   }
)
//Using Linkedlist
class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
}
//Push node to end of List
 appendlist=function(id,name,deposit){
    if(this.tail==null){
        this.head=this.tail=new Node(id,name,deposit)
    }
    else{
        let oldtail=this.tail
        this.tail=new Node(id,name,deposit)
        oldtail.next=this.tail
        this.tail.prev=oldtail
    }
}
//Push node to beginning of List
 prependlist=function(id,name,deposit){
    if(this.head==null){
        this.head=this.tail=new Node(id,name,deposit)
    }
    else{
        let oldhead=this.head
        this.head=new Node(id,name,deposit)
        oldhead.prev=this.head
        this.head.next=oldhead
    }
}
//search account by ID
search=function(id){
   let currentnode=this.head
   while(currentnode){
   if(currentnode.id==id){   
       return currentnode
   }
   currentnode=currentnode.next
}
return null
}
}
class Node{
    constructor(id,name,deposit,prev,next){
    this.id=id
    this.name=name
    this.deposit=deposit
    this.prev=prev||null
    this.next=next||null
    }
}



app.get('/retrievelist',function(req,res,next){
    var list=new LinkedList()
    list.appendlist(1,'alex',5)
    list.appendlist(2,'sarah',5)
    list.prependlist(3,'jim',15)
    console.log(list)
    var node=list.search(req.query.num1)
    if(node!=null){
    res.send("id:"+node.id+"  name:"+node.name+"  deposit:"+node.deposit+"\n")
    }
    else{
    res.send("No account with this id")
    }
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//Linked list has dynamic size whereas for array it is fixed size. Moreover, Using Linkedlist, we can easily insert or delete new element, while it takes much time for delete or insert when using Array.