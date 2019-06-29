import React, { Component } from "react";
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "../shared/Loading";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import Trim from "trim";
import _ from "lodash";

export class index extends Component {
  constructor(props) {
    super(props);
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "xxxxxx",
      authDomain: "xxxxxx",
      databaseURL: "xxxxxx",
      projectId: "xxxxxx",
      storageBucket: "",
      messagingSenderId: "xxxxxx",
      appId: "xxxxxx"
    };
	
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.onChangeShare = this.onChangeShare.bind(this);

    this.state = {
      loading: true,
      codeShare: ""
    };
  }

  componentDidMount() {
    this.delayTimeout(50);
  }

  delayTimeout = time => {
    let app = firebase.database().ref("masharecode-" + "test");
    app.on("value", snapshot => {
      setTimeout(() => {
          if(snapshot.val() != null){
            this.setState({
              codeShare: (snapshot.val()).codeShared,
              loading: false
            });
          }
      }, time);
    });
  }

  onChangeShare(e) {
    this.setState({
      codeShare: e.target.value
    });
    let dbCon = firebase.database().ref("/masharecode-" + "test");
    var timestamp = this.getTimestamp(); //20190617150828
    var updateDateTimestamp =
      timestamp.substring(8, 6) +
      "/" +
      timestamp.substring(6, 4) +
      "/" +
      timestamp.substring(4, 0);
    var updateTimeTimestamp =
      timestamp.substring(10, 8) + ":" + timestamp.substring(12, 10);
    dbCon.set({
      codeShared: Trim(e.target.value),
      updateDate: updateDateTimestamp,
      updateTime: updateTimeTimestamp
    });
  }

  getTimestamp = () => {
    try {
      var date = _.padStart(new Date().getDate(), 2, "0");
      var month = _.padStart(new Date().getMonth() + 1, 2, "0");
      var year = _.padStart(new Date().getFullYear(), 4, "0");
      var hours = _.padStart(new Date().getHours(), 2, "0");
      var min = _.padStart(new Date().getMinutes(), 2, "0");
      var sec = _.padStart(new Date().getSeconds(), 2, "0");
      return year + "" + month + "" + date + "" + hours + "" + min + "" + sec;
    } catch (e) {
      return e.message;
    }
  };

  render() {
    return (
      <div>
        <CssBaseline />
        {this.state.loading ? (
          <Loading />
        ) : (
            <Container>
              <form>
                <TextField
                  onChange={this.onChangeShare}
                  value={this.state.codeShare}
                  id="outlined-multiline-static"
                  label="สิ่งที่อยากแชร์"
                  placeholder="ใส่สิ่งที่อยากแชร์"
                  multiline
                  name="comment"
                  rows="25"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "100%"}}
                />
              </form>
            </Container>
          )}
      </div>
    );
  }
}

export default index;
