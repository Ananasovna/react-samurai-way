import {ChangeEvent, Component} from "react";

type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    enableEditMode = () => {
        this.setState({editMode: true})
    }

    disableEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status as string);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {

        return (
            <div>
                <div>
                    {!this.state.editMode
                    ? <div onDoubleClick={this.enableEditMode}>{this.state.status || 'Where is my status?'}</div>
                    : <input onChange={this.onStatusChange}
                            onBlur={this.disableEditMode}
                           value={this.state.status as string}
                           autoFocus={true}
                           type="text"/>
                }
                </div>
            </div>
        )
    }
}