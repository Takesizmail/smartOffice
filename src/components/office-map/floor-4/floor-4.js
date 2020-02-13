import React from 'react'
import '../office-map-container/office-map-container.scss'

const Floor4 = ({goToRoom}) =>{

    const makeMassage =(e) =>{
        const id = e.target.getAttribute('data-zone-id');
        goToRoom(id);
    };

    return(

        <svg width="900" height="1050" version="1.1" viewBox="0 0 238.12 277.81" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#000" stroke-width=".52917">
                <path d="m211.93 256.38h-33.867m0-1.5875h33.867m-30.162 17.198v-15.61m26.988-1.8521v-15.875m-3.7042 0v15.875zm-6.35 0v15.875zm13.229 0v33.338zm-10.054 0v15.875zm-20.108 0v15.875zm3.175 0v15.875zm10.054 0v15.875zm-3.175 0v15.875zm-3.175 0v15.875zm-10.583 0v33.338zm6.8792 17.727v15.61zm3.7042 0v15.61zm3.175 0v15.61zm3.175 0v15.61zm3.7042 0v15.61zm3.175 0v15.61zm3.175 0v15.61zm3.7042 0v15.61z"/>
                <path d="m55.827 47.36h-33.867m2e-6 -1.5875h33.867m-30.163 17.992v-16.404m26.988-1.3229v-15.61m-3.7042 0v15.61zm-6.35 0v15.61zm13.229 0v33.338zm-10.054 0v15.61zm-20.108 0v15.61zm3.175 0v15.61zm10.054 0v15.61zm-3.175 0v15.61zm-3.175 0v15.61zm-10.583 0v33.338zm6.8792 16.933v16.404zm3.7042 0v16.404zm3.175 0v16.404zm3.175 0v16.404zm3.7042 0v16.404zm3.175 0v16.404zm3.175 0v16.404zm3.7042 0v16.404z"/>
            </g>
            <g>
                <g transform="translate(0,-19.187)" fill="none" >
                    <path d="m77.874 165.44-4.1995-7.0086" stroke="#555" stroke-width=".52917"/>
                    <path d="m73.594 175.13 4.1851-6.9846" stroke="#555" stroke-width=".52917"/>
                    <path d="m147.07 232.25 8.5549-5.126" stroke="#555" stroke-width=".52917"/>
                    <path d="m135.46 227.15 8.5344 5.1137" stroke="#555" stroke-width=".52917"/>
                    <path d="m95.073 269.86 6.6668 3.9946" stroke="#555" stroke-width=".52917"/>
                    <path d="m154.2 253.8-7.9302 4.7516" stroke="#555" stroke-width=".52917"/>
                    <path d="m189.16 202.19-6.5465 3.9226" stroke="#555" stroke-width=".52917"/>
                    <path d="m163.37 239.37-4.1995-7.0086" stroke="#555" stroke-width=".52917"/>
                    <path d="m159.09 249.06 4.1851-6.9846" stroke="#555" stroke-width=".52917"/>
                    <path d="m81.34 270.1-6.369 3.8162" stroke="#555" stroke-width=".52917"/>
                    <path d="m116.11 253.43 8.5549 5.126" stroke="#555" stroke-width=".52917"/>
                    <path d="m73.373 240.16 5.0755-8.4707" stroke="#555" stroke-width=".52917"/>
                    <path d="m78.449 104.35-5.0545-8.4356" stroke="#555" stroke-width=".52917"/>
                    <path d="m87.574 114.52 4.7484-7.9248" stroke="#555" stroke-width=".52917"/>
                    <path d="m92.075 123.96-4.567-7.622" stroke="#555" stroke-width=".52917"/>
                    <path d="m87.18 65.721 5.0784-8.4755" stroke="#555" stroke-width=".52917"/>
                    <path d="m69.053 64.799 4.7608-7.9454" stroke="#555" stroke-width=".52917"/>
                    <path d="m73.8 74.536-4.8123-8.0314" stroke="#555" stroke-width=".52917"/>
                    <path d="m147.43 46.73 3.9106 9.0579v13.263l-4.9165 8.3669" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m73.554 57.288-0.0019-7.9383h-67.731m115.89-3.1742h-29.638v11.377m0 10.243v11.188h53.181l1.2216-1.6627m1.0273-30.409-0.64256-0.73705h-25.159" stroke="#000" stroke-width="1.0583"/>
                    <path d="m5.8209 48.83v10.839m0 13.229v9.7329h67.733v-8.5045" stroke="#000" stroke-width="1.0583"/>
                    <path d="m5.8209 59.669v13.229" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m5.8209 82.631v14.344m0 13.494v19.05m0 13.494v11.112h67.733v-47.625m0-10.319v-13.598" stroke="#000" stroke-width="1.0583"/>
                    <path d="m5.8209 96.975v13.494" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m5.8209 129.52v13.494" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m148.01 96.731 7.1588 13.006" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m95.25 78.983v18.017h-3.175v10.01m0 16.952h52.917l13.018-9.8604-2.9499-4.5641m-6.9301-12.591-6.8488-17.94" stroke="#000" stroke-width="1.0583"/>
                    <path d="m73.554 154.12v4.5317m0 16.109v49.739h-67.733v-14.023m0-13.229v-21.696m0-13.494v-7.9375" stroke="#000" stroke-width="1.0583"/>
                    <path d="m5.8209 162.06v13.494" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m5.8209 197.25v13.229" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m92.074 123.43 0.0014 99.485 37.568-1e-3v4.2338h6.3499m19.05 0h20.111l25.929-2e-3v-6.0854m0-12.7v-2.3812h-10.848m-7.4083 0h-7.673v21.168" stroke="#000" stroke-width="1.0583"/>
                    <path d="m210.25 150.76 6.9134 5.1944 5.4807 8.41 1.8899 9.8274-1.7009 9.3549-5.1972 8.41-7.9842 5.9152" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m158.01 114.1 9.5469 11.24 5.4806 5.1972 10.489 8.3155 10.149 6.8358v4.7303h14.758l2.0045 0.48144m-0.60136 46.839-5.3454 1.8921h-3.4071v6.1928" stroke="#000" stroke-width="1.0583"/>
                    <path d="m201.08 208.36v12.7" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m5.8209 224.77v8.2021m0 13.494v15.081m0 13.494v16.14h32.122m35.611-32.808v-18.521m-0.0018-8.5287 0.0018-6.6185" stroke="#000" stroke-width="1.0583"/>
                    <path d="m5.8209 232.97v13.494" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m5.8209 261.55v13.494" stroke="#2196ff" stroke-width=".79375"/>
                    <path d="m103.19 258.37v32.808h-65.371" stroke="#000" stroke-width="1.0583"/>
                    <path d="m73.552 273.71h1.5875m6.8791 0h12.7m6.8791 0h1.6569" stroke="#000" stroke-width="1.0583"/>
                    <path d="m73.554 290.85v-32.479" stroke="#000" stroke-width="1.0583"/>
                    <path d="m88.37 291.22v-32.437" stroke="#000" stroke-width="1.0583"/>
                    <path d="m99.483 291.18h42.333v-32.812h-17.462" stroke="#000" stroke-width="1.0583"/>
                    <path d="m142.08 291.18h17.198v-32.812h-3.175m-9.525 0h-4.4294" stroke="#000" stroke-width="1.0583"/>
                    <path d="m159.28 258.11v-9.3549m0-16.206v-5.4015" stroke="#000" stroke-width="1.0583"/>
                    <path d="m176.48 257.84h53.181" stroke="#000" stroke-width="1.0583"/>
                    <path d="m200.82 227.15h28.84v30.578" stroke="#000" stroke-width="1.0583"/>
                    <path d="m159.54 291.18h70.115v-33.64" stroke="#000" stroke-width="1.0583"/>
                    <path d="m206.9 227.11v30.2" stroke="#000" stroke-width="1.0583"/>
                    <path d="m208.23 228.47h20.108v28.046h-20.108z" stroke="#000" stroke-width=".52917"/>
                    <path d="m208.23 228.47 20.108 28.046" stroke="#000" stroke-width=".52917"/>
                    <path d="m228.34 228.47-20.108 28.046" stroke="#000" stroke-width=".52917"/>
                    <path transform="translate(0 19.187)" d="m130.18 128.06h7.9375v7.9375h-7.9375z" stroke="#000" stroke-width="1.0583"/>
                    <path d="m73.554 49.368 18.532-0.01786" fill="none" stroke="#000" stroke-width="1.0583"/>
                    <path d="m95.265 254.52 6.6668 3.9946" stroke="#555" stroke-width=".52917"/>
                    <path d="m81.531 254.76-6.369 3.8162" stroke="#555" stroke-width=".52917"/>
                    <path d="m73.744 258.37h1.5875m6.8791 0h12.7m6.8791 0h13.563" stroke="#000" stroke-width="1.0583"/>
                </g>
            </g>
            <g id="rooms" fill="none">
                <path d="m92.075 26.988 54.787-7.5e-4 0.64256 0.73705 3.8357 8.8766v13.263l-4.863 8.2694-1.2216 1.6627h-53.18z"/>
                <path d="m92.322 87.408-0.2474-9.5952h3.175v-18.017l46.031 0.0235 6.7293 17.724 7.0496 12.807 2.9497 4.5642-13.018 9.8583h-52.917z"/>
                <path onClick={(e)=>makeMassage(e)} d="m92.075 104.78h52.917l13.018-9.8604 9.5471 11.238 5.4806 5.1972 10.489 8.3152 10.149 6.8358v4.7306h14.758l2.0045 0.48144 6.7291 5.0556 5.477 8.4086 1.8936 9.8288-1.7009 9.3549-5.1972 8.41-7.803 5.7811-5.3452 1.8918-3.4073 3e-4 -7.4e-4 27.514-71.44 2e-3v-4.2338l-37.568 1e-3z" data-zone-id="8"/>
                <path onClick={(e)=>makeMassage(e)} d="m5.8209 205.58 67.733-0.0651 1e-4 66.141-67.733 0.32928z" data-zone-id="9"/>
                <path  onClick={(e)=>makeMassage(e)} d="m5.8209 134.94h67.733l1e-4 70.375-67.733 0.27z" data-zone-id="10"/>
                <path d="m5.8209 63.444h67.733l1e-4 71.489-67.733 5e-4z"/>
            </g>
            <rect x="82.812" y="11.642" width="44.45" height="10.319" fill="none" opacity=".601"/>
        </svg>
    )
};
export default Floor4