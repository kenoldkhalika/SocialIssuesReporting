import React from "react";
import fireDb from "firebase";
import IssueDetails from './IssueDetails'
import {toast} from "react-toastify";

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      issues: [],
      yourvariable: null
    };
  }

  componentDidMount() {
    this.getUserData();
  }
  sendVariable(uid){
    this.setState({yourvariable: uid});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    fireDb.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let contact = this.refs.contact.value;
    let email = this.refs.email.value;

    // let email = this.refs.mail.value;
     let location = this.refs.location.value;
     let date = this.refs.date.value;
    let issueDescription = this.refs.issueDescription.value;
    let subject = this.refs.subject.value;
    let priority = "low";
    let source = "Web app";

    let uid = this.refs.uid.value;
    toast.configure();

    if (uid && name && contact && email && location && date && issueDescription && subject) {
      const { issues } = this.state;
      const devIndex = issues.findIndex(data => {
        return data.uid === uid;
      });
     
      issues[devIndex].name = name;
      issues[devIndex].contact = contact;
      issues[devIndex].email = email;
      issues[devIndex].subject = subject;
      // issues[devIndex].email = email;
       issues[devIndex].location = location;
      issues[devIndex].date = date;
       issues[devIndex].issueDescription = issueDescription;
      this.setState({ issues });
    } else if (name && <i class="fas fa-meh-rolling-eyes    "></i>) {
      const uid = new Date().getTime().toString();
      const { issues } = this.state;
      issues.push({ uid, name, contact, email, location, date, issueDescription, subject, priority, source});
      this.setState({ issues });
     
        toast('added successfully',
        {position:toast.POSITION.TOP_CENTER, autoClose:800})
       
    }
    

    this.refs.name.value = "";
    this.refs.contact.value = "";
    this.refs.email.value = "";
    // this.refs.email.value = "";
     this.refs.location.value = "";
    this.refs.date.value = "";
     this.refs.issueDescription.value = "";
     this.refs.subject.value = "";
    this.refs.uid.value = "";
  };

  removeData = issue => {
    const { issues } = this.state;
    const newState = issues.filter(data => {
      return data.uid !== issue.uid;
    });
    this.setState({ issues: newState });
  };

  updateData = issue => {
    this.refs.uid.value = issue.uid;
    this.refs.name.value = issue.name;
    this.refs.contact.value = issue.contact;
    this.refs.email.value = issue.email;
   //  this.refs.email.value = issue.email;
     this.refs.location.value = issue.location;
    this.refs.date.value = issue.date;
     this.refs.issueDescription.value = issue.issueDescription;
     this.refs.subject.value = issue.subject;
  };

  render() {
    const { issues } = this.state;
    return (
      <React.Fragment>
        {/* <IssueDetails onChange={this.sendVariable.bind(this)}/> */}
        <div className="container">
          <div className="row">
            
          </div>
          <div className="row">
           
                  </div>
                </div>
             
          <div className="row">
            <div className="col-xl-12">
            {/* <button className="btn btn-primary mt-2"> create ticket</button> */}

                          <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>contact</label>
                    <input
                      type="text"
                      ref="contact"
                      className="form-control"
                      placeholder="contact"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="text"
                      ref="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>contact</label>
                    <input
                      type="text"
                      ref="location"
                      className="form-control"
                      placeholder="contact"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>subject</label>
                    <input
                      type="text"
                      ref="subject"
                      className="form-control"
                      placeholder="subject"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>contact</label>
                    <input
                      type="text"
                      ref="date"
                      className="form-control"
                      placeholder="contact"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>contact</label>
                    <input
                      type="text"
                      ref="issueDescription"
                      className="form-control"
                      placeholder="contact"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
          
          
            </div>
          </div>
         
      </React.Fragment>
    );
  }
}

export default Form;
