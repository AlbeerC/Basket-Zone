import './DetailModal.scss'

function DetailModal ( {isOpen, onClose} ) {

    return (
        <div className="modal">
            <div className="modal-top">
                <h3>Size guide</h3>
                <span className="close-btn" onClick={onClose}>&times;</span>
            </div>
            <table>
                <tr>
                    <th className='td-title'>SIZE</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>XXL</th>
                </tr>
                <tr>
                    <td className='td-title'>BODY WIDTH</td>
                    <td>48.8</td>
                    <td>52.8</td>
                    <td>56.8</td>
                    <td>61.8</td>
                    <td>66.8</td>
                </tr>
                <tr>
                    <td className='td-title'>BODY LENGHT</td>
                    <td>71.3</td>
                    <td>75.3</td>
                    <td>77.3</td>
                    <td>79.3</td>
                    <td>81.3</td>
                </tr>
            </table>
        </div>
    )
}

export default DetailModal
