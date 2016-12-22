import React from 'react';
import { Overlay, DropdownButton, MenuItem } from 'react-bootstrap';
import { MD } from './constants/MarkerTypes';

const { PropTypes, Component } = React;

class MarkerPopup extends Component {

    constructor(props) {
        super(props);

        this._triggerShowTimeout.bind(this);
        this._triggerHideTimeout.bind(this);
        this._hide = this._hide.bind(this);
        this._show = this._show.bind(this);

        this.state = {
            show: false
        }
    }

    _triggerShowTimeout() {
        if (this.hideTimeout !== undefined) {
            clearTimeout(this.hideTimeout);
        }
        const queuedMarker = MarkerPopup.queuedMarker;
        if (queuedMarker !== undefined && queuedMarker !== this) {
            clearTimeout(queuedMarker.showTimeout);
        }
        if (queuedMarker !== this) {
            this.showTimeout = setTimeout(() => {
                this.showTimeout = undefined;
                this._show();
            }, MarkerPopup.transitionTimeout);
        }
        MarkerPopup.queuedMarker = this;
    }

    _triggerHideTimeout() {
        if (this.showTimeout !== undefined) {
            clearTimeout(this.showTimeout);
            if (MarkerPopup.queuedMarker === this) {
                MarkerPopup.queuedMarker = undefined;
            }
        }
        this.hideTimeout = setTimeout(() => {
            this.hideTimeout = undefined;
            this._hide();
        }, MarkerPopup.transitionTimeout);
    }

    _show() {
        if (MarkerPopup.queuedMarker === this) {
            MarkerPopup.queuedMarker = undefined;
        }
        if (this.showTimeout !== undefined) {
            clearTimeout(this.showTimeout);
        }
        const visiblePopup = MarkerPopup.visiblePopup;
        if (visiblePopup !== undefined && visiblePopup !== this) {
            visiblePopup._hide();
        }
        MarkerPopup.visiblePopup = this;
        this.setState({ show: true });
    }

    _hide() {
        if (this.showTimeout !== undefined) {
            clearTimeout(this.showTimeout);
        }
        if (this.hideTimeout !== undefined) {
            clearTimeout(this.hideTimeout);
        }
        const visiblePopup = MarkerPopup.visiblePopup;
        if (visiblePopup !== undefined && visiblePopup === this) {
            MarkerPopup.visiblePopup = undefined;
        }
        this.setState({ show: false });
    }

    render() {
        let markerData = MD[this.props.type];
        let actions = markerData.actions;

        let actionDropdown;
        if (actions) {
            let buttons = actions.map( (btnData, i) => (
                <MenuItem
                    className="item"
                    key={ i }
                    eventKey={ this.props.name }
                    onSelect={ (event, eventKey) => {
                        this._hide();
                        btnData.action(event, {name: this.props.name, type: this.props.type});
                    }}
                >
                    { btnData.description(this.props.name) }
                </MenuItem>
            ));

            actionDropdown = (
                <div className="dropdown" >
                    <DropdownButton
                        className="strip-margins"
                        title="Suggested Actions"
                        bsSize="xsmall"
                        id={this.props.id}
                    >
                        { buttons }
                    </DropdownButton>
                </div>
            );
        }

        return (
            <Overlay
                show={this.state.show}
                rootClose={true}
                onHide={this._hide}
                placement="right"
                container={this.props.container}
                target={() => this.props.target}
            >
                <div
                    className={`react-ace-marker-popup ${this.props.type}`}
                    onMouseEnter={() => {
                        clearTimeout(this.hideTimeout);
                    }}
                    onMouseLeave={() => this._triggerHideTimeout()}
                >
                    <div className="message">
                        { markerData.message(this.props.name) }
                    </div>
                    { actionDropdown }
                </div>
            </Overlay>
        );
    }
}

MarkerPopup.transitionTimeout = 500;

MarkerPopup.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    target: PropTypes.object,
    container: PropTypes.object
};

export default MarkerPopup;
