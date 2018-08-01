import * as React from 'react';

interface IListProps {
    title: string;
}

interface IListState {
    checked: boolean;
    isHide: boolean;
}

export default class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props)
        this.state = {
            checked: false,
            isHide: false,
        }
    }

    public render() {
        if (this.state.isHide) {
            return (
                null
            )
        }

        const changeChecked = () => this.handleChecked()
        const changeIsHide = () => this.handleIsHide()
        return (
        <div className='list'>
        <span onClick={changeChecked}>
        {this.state.checked
            ? <i className='fas fa-check-circle' />
            : <i className='far fa-circle' />
        }
        </span>
        {this.props.title}
        <span onClick={changeIsHide}>
            <i className='fas fa-times' />
        </span>
        </div>
        );
    }

    private handleChecked() {
        this.setState({checked: !this.state.checked})
    }

    private handleIsHide() {
        this.setState({isHide: true})
    }
}