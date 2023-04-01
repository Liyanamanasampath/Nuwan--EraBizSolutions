import React, { Component } from "react";
import axios from "axios";
import moment from 'moment';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

import {
  Form,
  Col,
  Row,
  Input,
  Select,
  Checkbox,
  Card,
  DatePicker,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../Styles/filter-styels.scss";
import {
	EditOutlined,
	EllipsisOutlined,
	CalendarOutlined,
} from "@ant-design/icons";

class FilterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredMark: "optional",
      Country: [],
      State: [],
      Specialist: [],
	  Doctors: [],
      SpecialistSearch: "",
	  showModal: false,
	  date: null,
	  doctor: null,
	  patientName:null,
	  time:null,
	  isAvailability: false,
	  FullteSearch: "",
	  showCalendar: false,
      parms: {
        Country: null,
        State: null,
        SpecialistData: [],
		SearchText: null,
      },
    };
	this.getAllDoctors = this.getAllDoctors.bind(this);
	this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  onTime = (e) => {
    this.setState({
        time: e.target.value
      });
  };
  onName = (e) => {
    this.setState({
        patientName: e.target.value
      });
  };

  handleSubmit=(event) =>{
	event.preventDefault();
	this.setState({ showModal: false });

    const { date, patientName, time, doctor } = this.state;
	axios
	.post("http://127.0.0.1:8000/api/check-availability", {
		date,
        patientName,
        time,
        doctor
	})
	.then((response) => {
		if (response) {
            if(response.data){
                Swal.fire({
                    title: 'Thank You!',
                    text: 'Your Appoiment is Confirmed.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
            }
            else{
                Swal.fire({
                    title: 'Warning!',
                    text: 'Doctor already has an appointment scheduled',
                    icon: 'error',
                    button: 'OK',
                  });
            }

		}
	})
	.catch((error) => {
		console.log(error);
	});

  }

  handleIconClick = () => {
	this.setState({
		showCalendar: !this.state.showCalendar
	});
};
  onRequiredTypeChange = ({ requiredMarkValue }) => {
    this.setState({ requiredMark: requiredMarkValue });
  };

  onChange = (e) => {
	const { parms } = this.state;
	const value = e.target.value;
	const isChecked = e.target.checked;
	let updatedSpecialist = [...this.state.parms.SpecialistData];
	
	if (isChecked) {
		console.log(value,'value')
	  updatedSpecialist.push(value);
	} else {
	  updatedSpecialist = updatedSpecialist.filter(speciality => speciality !== value);
	}
  
	parms.SpecialistData = updatedSpecialist;
	this.getAllDoctors(parms);
  };

  onSpecialistSearch = (value) => {
    this.setState({ SpecialistSearch: value }, () => {
      this.getAllSpecialist();
    });
  };

  onFullTextSearch = (value) => {
	const { parms } = this.state
	parms.SearchText = value; 
    this.setState({ parms}, () => {
		this.getAllDoctors(parms);
    });
  };

  onChangeCountry = (value) => {
	const { parms } = this.state;
	parms.Country = value; 
	this.setState({ parms }, () => {
	  this.getAllDoctors(parms);
	});
  };

  onChangeState = (value) => {
    const { parms } = this.state;
    parms.State = value;
    this.setState({ parms }, () => {
      this.getAllDoctors(parms);
    });
  };

  getAllCountries = () => {
    axios
      .get("http://127.0.0.1:8000/api/get-country")
      .then((response) => {
        if (response) {
          this.setState({ Country: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getAllState = () => {
    axios
      .get("http://127.0.0.1:8000/api/get-state")
      .then((response) => {
        if (response) {
          this.setState({ State: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getAllDoctors(params = null) {
	axios
		.get("http://127.0.0.1:8000/api/get-doctors", {
			params: {
				params: params,
			},
		})
		.then((response) => {
			if (response) {
				this.setState({ Doctors: response.data });
			}
		})
		.catch((error) => {
			console.log(error);
		});
	}

	checkAvailability(date,details) {
		this.setState({ date: date });
		this.setState({ doctor: details.doctor_id });
		this.handleOpenModal();
	}
	

	getAllSpecialist = () => {
		const { SpecialistSearch } = this.state;
		axios
		.get("http://127.0.0.1:8000/api/get-specialist", {
			params: {
			searchtext: SpecialistSearch,
			},
		})
		.then((response) => {
			if (response) {
			this.setState({ Specialist: response.data });
			}
		})
		.catch((error) => {
			console.log(error);
		});
	};

  
  componentDidMount() {
	this.getAllDoctors();
    this.getAllCountries();
    this.getAllState();
    this.getAllSpecialist();
  }

  render() {
    const { requiredMarkValue, parms, Country, State, Specialist,showCalendar,Doctors ,doctor,date} = this.state;
	const { Meta } = Card;

    return (
      <div className="fliter-section">
      <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Make Appoinment</h5>
            <button type="button" className="close" onClick={this.handleCloseModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={this.handleSubmit}>
            <Col className="mail-fliter" span={9}>
              <Form.Item label="Patient Name" required>
                <Input
                  placeholder="Input search text"
                  onChange={this.onName}
                  className="w-300"
                />
              </Form.Item>

              <Form.Item label="Time" required className="w-300">
                <Input
                  placeholder="Input search text"
                  onChange={this.onTime}
                  className="w-300"
				  type="time"
                />
              </Form.Item>
            </Col>
			<div className="modal-footer">
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
          </form>
        </div>
      </Modal>
        <Row>
          <Form
            layout="vertical"
            initialValues={{
              requiredMarkValue: requiredMarkValue,
            }}
            onValuesChange={this.onRequiredTypeChange}
            requiredMark={requiredMarkValue}
          >
            <Col className="mail-fliter" span={9}>
              <Form.Item label="Search" required>
                <Input.Search
                  placeholder="Input search text"
                  onSearch={this.onFullTextSearch}
                  className="w-300"
                />
              </Form.Item>
              <Form.Item label="Country" required className="w-300">
                <Select value={parms.Country} onChange={this.onChangeCountry}>
                  {Country.map((data) => (
                    <Select.Option key={data.country_id} value={data.country_id}>
                      {data.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="District/state" required className="w-300">
                <Select value={parms.State} onChange={this.onChangeState}>
                  {State.map((data) => (
                    <Select.Option key={data.state_id} value={data.state_id}>
                      {data.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Speciality" required className="w-300">
                <Input.Search
                  placeholder="Input search text"
                  onSearch={this.onSpecialistSearch}
                  className="w-300"
                />
                {Specialist.map((data) => (
                  <Checkbox
                    onChange={this.onChange}
                    key={data.specialty_id}
                    value={data.specialty_id}
                  >
                    {data.name}
                  </Checkbox>
                ))}
              </Form.Item>
            </Col>
          </Form>
			<Col span={15}>
			<div className="card-section d-flex justify-content-space-between">
				{Doctors.map((doctor) => (
                    <Card
                        key={doctor.id}
                        cover={<img alt="example" src={doctor.image} />}
                        actions={[
                            <CalendarOutlined onClick={this.handleIconClick} key="setting"/>,
                            <EditOutlined key="edit"/>,
                            <EllipsisOutlined key="ellipsis"/>,
                        ]}
                    >
                        {showCalendar && (
                            <DatePicker
                                showToday={false}
                                onChange={(date) => {
									const formattedDate = moment(date).format('YYYY-MM-DD');
									this.checkAvailability(formattedDate,doctor)
                                }}
                            />
                        )}
                        <Meta
                            // avatar={<Avatar src={doctor.avatar}/>}
                            title={doctor.doctorName}
                            description={doctor.hospitalName}
                        />
                    </Card>
                ))}
            </div>
			</Col>
        </Row>
      </div>
    );
  }

};

export default FilterSection;
