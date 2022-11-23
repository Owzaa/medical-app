import React, { Component } from 'react';
import { Table } from '@mui/material';
import { Button } from '@mui/material';
import { AddDepModal } from './AddModal';
import { EditDepModal } from './EditModal';

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
        const { patients, patid, patname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Patient Name </th>
                            <th>Patient Identity Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient =>
                            <tr key={patient.PatientId}>
                                <td>{patient.PatientName}</td>
                                <td>{patient.PatientIdentityNumber}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                patid: patient.PatientId, patname: patient.PatientName
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteDep(patient.PatientId)}>
                                            Delete
                                        </Button>

                                        <EditDepModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            patid={patid}
                                            patname={patname} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Patient</Button>

                    <AddDepModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}