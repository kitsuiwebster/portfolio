import '../assets/scss/components/PaperProof.scss';

function PaperProof({ src, alt }) {
    return(
        <div className='paperproof'>
            <img src={src} alt={alt} className="paperproof-image" />
        </div>
    )
}

export default PaperProof