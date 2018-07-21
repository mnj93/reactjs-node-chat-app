import React from 'react';

export default class Messenger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[]
        }

        this.addTestMessages = this.addTestMessages.bind(this);
    }

    addTestMessages(){
        let {messages} = this.state;
       
        for(let i=0;i<100;i++){
            let isMe = false;
            if(i % 2 === 0){
                isMe = true;
            }
            const newMsg = {
                author: "Tom",
                isMe:isMe,
                text:"This is msg "+i
            }
            messages.push(newMsg);            
        }

        this.setState({
            messages:messages
        });
    }
    componentDidMount(){
        this.addTestMessages();
    }
    render(){
        const imgStyle = {
            "height":"30px",
            "width":"30px"
        }
        const {messages} =this.state;
        return(
            <div className="container-fluid app-messenger">
              <div style={{padding:"1%"}} className="row">
                <div className="col-md-3">
                    New Message +
                </div>
                <div className="col-md-6">
                 Messages
                </div>
                <div className="col-md-3 text-right">
                   <span>Username</span>
                   <a style={{marginLeft:"2%"}} href="" className="thumbnail">
                     <img style={imgStyle} src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" alt="..." />
                    </a>
                </div>
                <div style={{padding:0}} className="col-md-3 messenger-left-bar">
                <div id="search">
			<label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
			<input type="text" placeholder="Search contacts..." />
		</div>
		<div id="contacts">
			<ul>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status online"></span>
						<img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
						<div className="meta">
							<p className="name">Louis Litt</p>
							<p className="preview">You just got LITT up, Mike.</p>
						</div>
					</div>
				</li>
				<li className="contact active">
					<div className="wrap">
						<span className="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<div className="meta">
							<p className="name">Harvey Specter</p>
							<p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status away"></span>
						<img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
						<div className="meta">
							<p className="name">Rachel Zane</p>
							<p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status online"></span>
						<img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
						<div className="meta">
							<p className="name">Donna Paulsen</p>
							<p className="preview">Mike, I know everything! I'm Donna..</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/jessicapearson.png" alt="" />
						<div className="meta">
							<p className="name">Jessica Pearson</p>
							<p className="preview">Have you finished the draft on the Hinsenburg deal?</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status"></span>
						<img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
						<div className="meta">
							<p className="name">Harold Gunderson</p>
							<p className="preview">Thanks Mike! :)</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status"></span>
						<img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
						<div className="meta">
							<p className="name">Daniel Hardman</p>
							<p className="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/katrinabennett.png" alt="" />
						<div className="meta">
							<p className="name">Katrina Bennett</p>
							<p className="preview">I've sent you the files for the Garrett trial.</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status"></span>
						<img src="http://emilcarlsson.se/assets/charlesforstman.png" alt="" />
						<div className="meta">
							<p className="name">Charles Forstman</p>
							<p className="preview">Mike, this isn't over.</p>
						</div>
					</div>
				</li>
				<li className="contact">
					<div className="wrap">
						<span className="contact-status"></span>
						<img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt="" />
						<div className="meta">
							<p className="name">Jonathan Sidwell</p>
							<p className="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div id="bottom-bar">
			<button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
			<button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
		</div>
                    
                </div>
                <div className="col-md-6 messenger-content">                                    

                    	<div className="messages">
			    <ul>
                {
                    messages.map((message,index) =>(                       
                        <li key={{index}} className={message.isMe ?  "sent":"replies"}>
                            <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                            <p>{message.text}</p>
                        </li>
                    ))
                }					    			
			</ul>
		</div>

            <div className="message-input">
                <div className="wrap">
                <input type="text" placeholder="Write your message..." />              
                <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
		    </div>
                </div>
                <div className="col-md-3 messenger-right-bar">
                    right sidebar
                </div>
              </div>
            </div>
        )
    }
}