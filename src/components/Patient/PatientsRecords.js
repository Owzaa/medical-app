import React, { Component } from 'react';

export class PatientRecords  extends Component {

    constructor(props) {
        super(props);
        this.state = { patients: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'patient')
            .then(response => response.json())
            .then(data => {
                this.setState({ patients: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDep(patid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'patient/' + patid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
       
        return (
            <div>
          
            </div>
        )
    }
}