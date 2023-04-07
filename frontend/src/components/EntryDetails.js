const EntryDetails = ({ entry }) => {
    return (
        <div className="workout-details">
            <h4><strong>Guest:</strong> {entry.guestName}</h4>
            <p><strong>Message:</strong> {entry.entryText}</p>
            <p>{entry.createdAt}</p>
        </div>
    )
}

export default EntryDetails;