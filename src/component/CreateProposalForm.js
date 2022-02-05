import React, { Component } from 'react';
import axios from 'axios';
import { VStack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import SubmitButton from './button/SubmitButton';

export default class CreateProposalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { title, description } = this.state;

    const json = JSON.stringify({
        title: title,
        description: description
    });
    
    const response = await axios.post('https://v80t5r85fd.execute-api.us-east-1.amazonaws.com/createDaoProposal', json);
    console.log("response", response);
  }

  render() {
    return ( 
      <FormControl>
        <VStack spacing={4}>
          <FormLabel>Title</FormLabel>
          <Input name='title' onChange={this.handleChange} value={this.state.title}/>
          <FormLabel>Description</FormLabel>
          <Input name='description' onChange={this.handleChange} value={this.state.description}/>
          <SubmitButton onSubmit={this.handleSubmit} />
        </VStack>
      </FormControl>
    );
  }
}