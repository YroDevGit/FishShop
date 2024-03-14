const FooterSection = ({title, subtitle}) =>{
    return(
        <div>
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
    <div className="container py-5">
        <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)"}}>
            <div className="row g-4">
                <div className="col-lg-3">
                    <a href="#">
                        <h1 className="text-primary mb-0">{title}</h1>
                        <p className="text-secondary mb-0">{subtitle}</p>
                    </a>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative mx-auto">
                        <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email"></input>
                        <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top:"0", right:"0"}}>Subscribe Now</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex justify-content-end pt-3">
                        <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                    <h4 className="text-light mb-3">Why People Like us!</h4>
                    <p className="mb-4">typesetting, remaining essentially unchanged. It was 
                        popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
                </div>
            </div>
            
            
            <ColumnLinks title={"Shop info"}>
                <LinkComponent text={"About us"} link={"#"} />
                <LinkComponent text={"Contact us"} link={"#"} />
                <LinkComponent text={"Privacy Policy"} link={"#"} />
                <LinkComponent text={"Terms & Condition"} link={"#"} />
                <LinkComponent text={"FAQs & Help"} link={"#"} />
            </ColumnLinks>

            

            
            <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                    <h4 className="text-light mb-3">Contact</h4>
                    <p>Address: 1429 Netus Rd, NY 48247</p>
                    <p>Email: Example@gmail.com</p>
                    <p>Phone: +0123 4567 8910</p>
                    <p>Payment Accepted</p>
                    <img src="img/payment.png" className="img-fluid" alt=""></img>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid copyright bg-dark py-4">
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
             
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}


const ColumnLinks = ({title, children}) =>{
    return(
        <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column text-start footer-item">
                    <h4 className="text-light mb-3">{title}</h4>
                    {children}
                </div>
            </div>
    )
}

const LinkComponent = ({text, link}) =>{
    return(
        <a className="btn-link" href={link}>{text}</a>
    )
}

export {FooterSection};