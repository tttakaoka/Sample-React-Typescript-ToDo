import * as React from 'react';
import './App.css';
import List from './List'

import logo from './logo.svg';

interface IAppState {
  inputText: string;
  tasks: string[];
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputText: '',
      tasks: ['トイレ掃除', '風呂掃除'],
    }
  }

  public render() {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => this.handleChangeText(event)
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => this.handleSubmitText(event)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ToDo App</h1>
        </header>
        <h1 className="App-title">All Tasks</h1>
        <div className='tasks'>
          {this.state.tasks.map((task, index) => {
            return (
              <List key={`list-${index}`} title={task}/>
            )
          })}
        </div>
        <form onSubmit={onSubmit}>
          <input 
            type='text'
            value={this.state.inputText} 
            onChange={onChange}
          />
        </form>
      </div>
    );
  }

  private handleSubmitText(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (this.state.inputText === '') {
      return
    }

    const tasks = this.state.tasks;
    tasks.push(this.state.inputText);
    this.setState({
      inputText: '',
      tasks,      
    })
  }

  private handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({inputText: event.target.value})
  }
}


