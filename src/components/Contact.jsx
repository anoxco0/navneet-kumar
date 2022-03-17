import './contact.css'

export const Contact = () =>{
    return (
        <div className='contact' style={
            {"backgroundColor":" #2a2a72",
            "backgroundImage": "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"}
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
