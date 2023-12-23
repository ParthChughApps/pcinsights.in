import React, { useState } from "react";

import Input from "./Input";

function AddData() {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };
  return (
    <div
      className="d-flex justify-content-between addData-container"
      style={{ marginBottom: 100 }}
    >
      <div className="flex-column d-flex">
        <div
          className="d-flex flex-column mentorship-main-component align-items-center"
          style={{ paddingLeft: 40 }}
        >
          <div className="d-flex flex-column">
            <span className="App-header">
              Lets <span style={{ color: "#FF5757" }}>Connect</span>
            </span>
            <span className="App-sub-heading">
              In-order to provide you a mentorship program we must know the
              people who are interested to participate
            </span>
            <form
              // className={classes.root}
              autoComplete="off"
              style={{ marginBottom: 40 }}
              onSubmit={onSubmit}
            >
              <Input
                id="newsletter"
                type="first_name"
                
                hasIcon="right"
                placeholder="First Name"
              />
              {/* <TextField
                id="standard-basic"
                required
                value={state.first_name}
                onChange={(data) =>
                  setState({ ...state, first_name: data.target.value })
                }
                label="First Name"
              />
              <TextField
                required
                id="standard-basic"
                value={state.last_name}
                label="Last Name"
                onChange={(data) =>
                  setState({ ...state, last_name: data.target.value })
                }
              />
              <TextField
                required
                id="standard-basic"
                label="Age"
                value={state.age}
                type="number"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={(data) =>
                  setState({ ...state, age: data.target.value })
                }
              />
              <TextField
                required
                id="standard-basic"
                label="Ph-no"
                type="number"
                value={state.phone}
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={(data) =>
                  setState({ ...state, phone: data.target.value })
                }
              />
              <TextField
                required
                type="email"
                name="email"
                value={state.email}
                autoComplete="email"
                id="standard-basic"
                label="Email"
                onChange={(data) =>
                  setState({ ...state, email: data.target.value })
                }
              /> */}
              <div style={{ marginTop: 30 }}>
                {!loading && (
                  <button className="global-button" type="submit">
                    <span>Submit</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddData;
