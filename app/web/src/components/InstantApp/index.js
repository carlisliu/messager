import React from 'react';
import * as style from './index.less';

class Head extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFiUlEQVRoQ+2ZdYhvRRTHP0+xExXRp9iiIirmU8EWGxu7MBDFQMRnd4JiI6IodrdYKNidiIGFHQ8TA2zls8xdZu/ee2fm/nb/ePC+sOy+N3Nm5syc+J5zJzCVY8JUfn6mKRC94CLA9sCygH/7szjwJ/Ap8Fn4eR24G/hhLF5/0BdYAtgd2A5YueBA/wDPAHcBNwyiTF8FlgaOB/YEpis4eNPUH4HTgUuBv0rXKlVgbuACYK/awf8DXgHuB54Cvgu3qpnMDiwZfpYBNgbWalD8E+Bg4KESJUoUWB54AFg02uAP4GzgMuDbgo3nAbYFDgJWq8mdD0wGNLMkchXQObXVWaIVdcQjgoMmN+qYsFkwoViRp4Edci4lRwFvysNWMKrsC9w4yKkbZI8BzoLh0G7UUqnOl00poM0a9qqb/x7YHHi54/BLAQcAGwHLAbOGua8BtwEXAb+3yG8B3B7JuM86gKbaiC4F5gLc1FApvIk1AJ2tCTMAJwDe5IwdCnqzKvdhy5w1gSeAmcK4Cu3UR4GbgF2DoOFtwxC7m9aaF3i0IBeoxArAzy0H2xm4JRo7NITZUdPbXmAV4NVottHi8o5bNYSuWugTZ4YXaxM7DzgyDJorDMX+HoE2BZ4LsdrJDwe7b9tIuzW8luKNxItND7wN6IfiYuDwHAU2AR4JE/8FVgLe6jjdycAppacPcV4774r3UhTphnCeAWKEDza9gOFxtyB0fci6Xec7Bzi6hwKKzAH8mpA1ElU5wgR3bjy/roDPpp25sFAw9oWmvQ4BLumhgPTDyJXKuLsAN4f1X4hMe+i/6gpsGmzesa+BiRkHWxt4NmNefco3wIIZcoZz84+XKzyTZ2tU4MLIUWSHhq8UvMXfwm2m5sbjkr71MgUM0ZJAsQ9wbZsC9wJbh8EdgTszNjBKvAh4UyV4PCQ0TSkFk6OkUUi9T2pTIHaYScBLqZXDYqdmzGuasjDwZYasRZNkUphg/fcQ6j7wVWSXuYv7Uqb7UmjX8wOG6hTWB3wx4WtLN0YpoDJGBH/7rDpNzvPqAzqVdKIEVwP7ZQpYAb4f5lpfLzaWCriWGdIAUAKph2QxB9KIivy1KuBCnwOajlgI0KRyMGfIH7n1sb4ms82F0UqGKkbkgroPPB/Zlxt08f765nIbaUcORmXUhJDMoCqgOp34jlDKuZ6U1gIkF3EOScnYO3ovNSkaPw6QvYozgBOrsfoLnBYNXgXsX7BJ/MxdYoZmQ3QJngTWDQKdiczwpBkJWyOGuZxIVB3myoTSVnWWpCl+FSunf/0UhXzphzRkCPUX8N+SuSqrWo/aQSuBUcK2YhNMeKXUe2/gmrDYqNdrotPXhY6bMvcB25ScHoj9qC5quLUwyYVR7Z2oqDkWkL4Po0kBSZPkqUIupajmP9hRwaXKyLpiMYUwyZrQPk4p4PhjgWj5t/F3g8wrM0O+C8zcMt+8YpejtU0SyVmtuZYdbmHNcVh93baa2I7Bm9HkowCL7DaYVVXSymy+hLIqIY2Q6XrANmVsIhwY1voltDSzi3rlZH8V6/s7hDEjlG10+zSaljZqr3SYm2S+VDXNCKdCHwWzvRX4IJS0cefPm2+s+roaW7OFTGx3TRi6dCj7Q+MFmek9wJZRY8uXkvE2ItValBdJJxYYrxMn1tWMpTS9WovV2iuGnn9pxTWozl8Aq8dJq2nB1AtUMtJZm1dVk2nQw6XkbWgZzoczbl8TiuX0CfuVW6V2H3DcYt89jDxJ5L5AvJAEzwI7FS6Tm9cmaOdmab+9ZX8r66OA+0qw3MgvNJaUg8BvBVeEjxtTShfqq0C1j/F/j/B9uOQzq/Hfyqr6zJq09bHwgdTldH3orj5y+1sH9eC9Dx0fZNAXSCk17uPTFBj3K05s8D+hLQ1APi9g1QAAAABJRU5ErkJggg=='} width={'40px'} height={'40px'} />
    }
}

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
                            <Head />
                        </div>
                    </div>
                </div>
                <div className={`${style.dialog_mine}`}>
                    <div className={`${style.dialog_item}`}>
                        <div className={`${style.dialog_item_icon}`}>
                            <Head />
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