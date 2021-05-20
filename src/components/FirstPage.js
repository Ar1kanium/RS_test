import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class FirstPage extends PureComponent {

    state = {
        messages: [
            ['Добрый день!', Date.now()],
            ['Это очень длинное предложение, которое могло бы выйти за область видимости', Date.now()],
            ['А_тут_я_буду_писать_совсем_без_пробелов', Date.now()]
            ],
        textArea: '',
        touched: false,
    }

    resize() {
        this.context.swipeableViews.slideUpdateHeight();
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.resize())
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.resize())
    }


    handleChange = (e) => {
        if (this.props.currentPage) {
            this.setState(state => ({
                ...state,
                textArea: e.target.value
            }))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.textArea !== '' && this.props.currentPage) {
            this.setState(state => ({
                ...state,
                messages: [...state.messages, [state.textArea, Date.now()]],
                textArea: ''
            }))
            this.resize()
        }
    }


    render() {
        return (
            <div className='first-page'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>
                        <textarea className='text-area'
                               value={this.state.textArea} onChange={this.handleChange} />
                    </label>
                    <input type="submit" className='submit' value="Send" />
                </form>
                {this.state.messages.map((el, id) => <div className='message' key={id}>
                    <p className='text'>{el[0]}</p>
                    <div className='message-time'>{new Intl.DateTimeFormat('en-GB', {
                        hour: 'numeric', minute: 'numeric',
                    }).format(el[1])}</div>
                </div> )}
            </div>
        )
    }
}

FirstPage.contextTypes = {
    swipeableViews: PropTypes.object.isRequired,
};


export default FirstPage