import { useEffect } from "react";
import { useUser } from "../hooks/useUser"
import { EyeFill, EyeSlashFill, PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { PasswordMoodal } from "../components/PasswordModal";

export const Profile = () => {

    const { 
        user, 
        isLoading, 
        visiblePaymentMethods, 
        visibleModalPassword, 
        visibleModalAddress, 
        handlerOpenModalPassword,
        getUser, 
        handlerPayments 
    } = useUser();

    useEffect(() => {
        getUser();
        visiblePaymentMethods;
    }, []);

    const hideCardNumber = (cardNumber) => {
        const last4Digits = cardNumber.slice(-4);
        const maskedCardNumber = '*'.repeat(cardNumber.length - 4) + last4Digits;
        return maskedCardNumber;
    }

    const hideExpiration = (expiration) => {
        const [month, year] = expiration.split("/");
        const maskedMonth = "*".repeat(month.length);
        const maskedDate = `${maskedMonth}/${year}`;
        return maskedDate;
    }

    if (isLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-primary m-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (<>
        {!visibleModalPassword ||
            <PasswordMoodal />
        }

        <div>
            <dl>
                <dt>Username</dt>
                <dd>{user.username}</dd>
                <dt>Email</dt>
                <dd>{user.email}</dd>
                <dt>Phone number</dt>
                <dd>{user.phoneNumber}</dd>
            </dl>

            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={() => handlerOpenModalPassword()}>Change password</button>
            </div>


            <div className="accordion" id="userData">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePaymentMethods" aria-expanded="false" aria-controls="collapsePaymentMethods">
                            Payment methods
                        </button>
                    </h2>
                    <div id="collapsePaymentMethods" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Card number</th>
                                        <th>Expiration</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    user.paymentMethods.map(({ id, cardNumber, monthExpiration, yearExpiration }) => (
                                        <tr key={id}>
                                            <td>
                                                {
                                                    (!visiblePaymentMethods.includes(id)) ? hideCardNumber(cardNumber) : cardNumber
                                                }
                                            </td>
                                            <td>
                                                {
                                                    (!visiblePaymentMethods.includes(id)) ? hideExpiration(monthExpiration + "/" + yearExpiration) : monthExpiration + "/" + yearExpiration
                                                }
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm"
                                                    onClick={() => handlerPayments(id)}
                                                >
                                                    {
                                                        (!visiblePaymentMethods.includes(id)) ?
                                                            <span><EyeFill className="me-2" /> Show</span> :
                                                            <span><EyeSlashFill className="me-2" /> Hide</span>
                                                    }
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <Trash3Fill className="me-2" />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddresses" aria-expanded="false" aria-controls="collapseAddresses">
                            Addresses
                        </button>
                    </h2>
                    <div id="collapseAddresses" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Street</th>
                                        <th>Number</th>
                                        <th>Suburb</th>
                                        <th>Post code</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    user.addresses.map(({ id, street, number, suburb, postCode, city, state, country }) => (
                                        <tr key={id}>
                                            <td>{street}</td>
                                            <td>{number}</td>
                                            <td>{suburb}</td>
                                            <td>{postCode}</td>
                                            <td>{city}</td>
                                            <td>{state}</td>
                                            <td>{country}</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-secondary btn-sm"
                                            >
                                                <PencilSquare className="me-2" />
                                                Edit
                                            </button>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <Trash3Fill className="me-2" />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}