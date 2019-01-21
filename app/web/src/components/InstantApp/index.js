import React from 'react';

import HeadIcon from '../HeadIcon';
import * as style from './index.less';

export default class InstantApp extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    }

    render() {
        const { prefixCls } = this.props;
        return (<div>
            <div className={`${style.main}`}>
                <div className={`${style.dialog_other}`}>
                    <div className={`${style.dialog_item}`}>
                        <div className={`${style.dialog_item_content}`}>
                            content  hello therehello
                        </div>
                        <div className={`${style.dialog_item_icon}`}>
                            <HeadIcon />
                        </div>
                    </div>
                </div>
                <div className={`${style.dialog_mine}`}>
                    <div className={`${style.dialog_item}`}>
                        <div className={`${style.dialog_item_icon}`}>
                            <HeadIcon />
                        </div>
                        <div className={`${style.dialog_item_content}`}>
                            hello therehello therehello therehello therehello therehello therehello therehello therehello there
                            hello therehello therehello therehello therehello therehello there
                            hello therehello therehello therehello therehello therehello there
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.input_dialog}`}>
                <div className={`${style.input_icon}`}>
                    +
                </div>
                <div className={`${style.input_content}`}>
                    <textarea rows={1} />
                </div>
                <div className={`${style.input_action}`}>
                    <button>Send</button>
                </div>
            </div>
        </div>)
    }
}