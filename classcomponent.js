constructor(props)
{
super(props)
this.state={
  name:'',
  color:false,
  backgroundcolor:''

}
this.onChange=this.onChange.bind(this);

}
onChange(event)
{
event.preventDefault();
this.setState({[event.target.name]:event.target.value});
console.log(this.state);
this.props.come(this.state.name);
console.log('hello this is from name box',this.state.name);
this.setState({color:true});
console.log(this.state.color);
}

render() {
return (

   <div class="home">
   <h3>This is Function#1</h3>
   <p>Have You noticed The Changing ,How fast react works</p>
   <div>
       <label>Your Name:</label>
       <input type="text" name="name"onChange={this.onChange} placeholder="Enter your Name"/>
   </div>
   <br>
  </br>
   <div>
     {this.props.sendname.newname}
  </div>

  <div>
   /*this is my div where i want color*/

    </div>
  </div>
)