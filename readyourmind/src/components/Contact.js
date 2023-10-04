const Contact = () => {

    return(
       
    <div className="container-fluid mt-4" id="Contact" style={{width:'90%',margintop:'20px'}}>      
        <h1>Contact Me</h1>  
        <form method="post">
            <label for="Name">Name</label><br/>
            <input type="text" Name="Name"/><br/>
            <label for="Message">Message</label><br/>
            <textarea name="Message" id="Message" cols="30" rows="6"></textarea>
            <br/>
            <input type="submit" value="Submit"/>
            <br/><br/><br/><br/>
        </form>  

    </div>

      );
    };
    
    export default Contact;
    