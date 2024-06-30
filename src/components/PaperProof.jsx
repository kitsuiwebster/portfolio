import '../assets/scss/components/PaperProof.scss';

function PaperProof({ src, alt, date }) {
    return(
        <>
            <div className='paperproof'>
                <img loading="lazy" src={src} alt={alt} className="paperproof-image" />
                <p className='paperproof-date'>{date}</p>
            </div>
        </>
    )
}

export default PaperProof