import './contact.css'

export const Contact = () =>{
    return (
        <div className='contact' style={
            {"backgroundColor":" #000000",
            "backgroundImage": "linear-gradient(147deg, #000000 0%, #2c3e50 74%)"}
        } >
            <div>Get in Touch</div>
            <form action="">
                <input type="email" placeholder='Your email' />
                <textarea placeholder='Your message' name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="send"  />
            </form>
     
        </div>
    )
}