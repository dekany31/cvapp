
const Textarea = (props) => {

  //event függvény
  const onChange = (e) => {
    /* console.log(e.target);
    console.log(e.target.value); */
    props.setContState(e.target.value);
};

  return (
   <textarea id="w3review" onChange={onChange}></textarea>
 );
}
export default Textarea;