import React from 'react'
import '../office-map-container/office-map-container.scss'

const Floor3 = ({goToRoom}) =>{

     const makeMassage =(e) =>{
         const id = e.target.getAttribute('data-zone-id');
         goToRoom(id);
     };

    return(

        <svg width="900" height="1050" version="1.1" viewBox="0 0 238.12 277.81" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#000">
                <path d="m211.93 256.38h-33.867m0-1.5875h33.867m-30.162 17.198v-15.61m26.988-1.8521v-15.875m-3.7042 0v15.875zm-6.35 0v15.875zm13.229 0v33.338zm-10.054 0v15.875zm-20.108 0v15.875zm3.175 0v15.875zm10.054 0v15.875zm-3.175 0v15.875zm-3.175 0v15.875zm-10.583 0v33.338zm6.8792 17.727v15.61zm3.7042 0v15.61zm3.175 0v15.61zm3.175 0v15.61zm3.7042 0v15.61zm3.175 0v15.61zm3.175 0v15.61zm3.7042 0v15.61z" stroke-width=".52917"/>
                <path d="m55.827 47.36h-33.867m2e-6 -1.5875h33.867m-30.163 17.992v-16.404m26.988-1.3229v-15.61m-3.7042 0v15.61zm-6.35 0v15.61zm13.229 0v33.338zm-10.054 0v15.61zm-20.108 0v15.61zm3.175 0v15.61zm10.054 0v15.61zm-3.175 0v15.61zm-3.175 0v15.61zm-10.583 0v33.338zm6.8792 16.933v16.404zm3.7042 0v16.404zm3.175 0v16.404zm3.175 0v16.404zm3.7042 0v16.404zm3.175 0v16.404zm3.175 0v16.404zm3.7042 0v16.404z" stroke-width=".52917"/>
            </g>
            <g transform="translate(0 -19.187)" fill="none">
                <path d="m87.481 273.56 6.6668 3.9946" stroke="#555" stroke-width=".52917"/>
                <path d="m154.2 253.8-7.9302 4.7516" stroke="#555" stroke-width=".52917"/>
                <path d="m189.16 202.19-6.5465 3.9226" stroke="#555" stroke-width=".52917"/>
                <path d="m163.37 239.37-4.1995-7.0086" stroke="#555" stroke-width=".52917"/>
                <path d="m159.09 249.06 4.1851-6.9846" stroke="#555" stroke-width=".52917"/>
                <path d="m88.587 253.8-7.9543 4.7661" stroke="#555" stroke-width=".52917"/>
                <path d="m63.032 273.9-6.1251 3.6701" stroke="#555" stroke-width=".52917"/>
                <path d="m78.269 273.8-6.369 3.8162" stroke="#555" stroke-width=".52917"/>
                <path d="m56.383 273.4-3.7201-6.2087" stroke="#555" stroke-width=".52917"/>
                <path d="m124.58 253.43 8.5549 5.126" stroke="#555" stroke-width=".52917"/>
                <path d="m112.97 258.53 8.5344-5.1137" stroke="#555" stroke-width=".52917"/>
                <path d="m73.373 243.33 5.0755-8.4707" stroke="#555" stroke-width=".52917"/>
                <path d="m88.571 208.16 4.0602 6.7762" stroke="#555" stroke-width=".52917"/>
                <path d="m78.449 210.22-5.0659-8.4546" stroke="#555" stroke-width=".52917"/>
                <path d="m87.18 202.51 5.0906-8.4958" stroke="#555" stroke-width=".52917"/>
                <path d="m78.449 133.98-5.0545-8.4356" stroke="#555" stroke-width=".52917"/>
                <path d="m87.574 114.52 4.7484-7.9248" stroke="#555" stroke-width=".52917"/>
                <path d="m92.075 123.96-4.567-7.622" stroke="#555" stroke-width=".52917"/>
                <path d="m87.18 65.721 5.0784-8.4755" stroke="#555" stroke-width=".52917"/>
                <path d="m69.053 64.799 4.7608-7.9454" stroke="#555" stroke-width=".52917"/>
                <path d="m73.8 74.536-4.8123-8.0314" stroke="#555" stroke-width=".52917"/>
                <path d="m78.449 42.967-5.0682-8.4585" stroke="#555" stroke-width=".52917"/>
                <path d="m81.723 54.245-8.169-4.8948" stroke="#555" stroke-width=".52917"/>
                <path d="m73.554 44.739v4.6113h-67.733v-5.2917m3.333e-4 -6.8792-3.333e-4 -4.2333 67.733-5.6506v7.5027" stroke="#000" stroke-width="1.0583"/>
                <path d="m147.43 46.73 3.9106 9.0579v13.263l-4.9165 8.3669" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m83.917 54.246 8.169-4.8948" stroke="#555" stroke-width=".52917"/>
                <path d="m70.952 27.512 50.756-4.0915v10.319m-48.154 23.548v-7.9186m48.159-5.5751v2.3812h-29.638v11.377m0 10.243v11.188h53.181l1.2216-1.6627m1.0273-30.409-0.64256-0.73705h-25.159" stroke="#000" stroke-width="1.0583"/>
                <path d="m5.8209 49.35v10.319m0 13.229v9.7329h67.733v-8.5045" stroke="#000" stroke-width="1.0583"/>
                <path d="m5.8209 59.669v13.229" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m121.71 33.74v10.054" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m5.8209 44.058 3.333e-4 -6.8792" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m5.8209 82.631v14.344m0 13.494v19.05m0 13.494v11.112h67.733v-17.992m0-10.319v-43.231" stroke="#000" stroke-width="1.0583"/>
                <path d="m5.8209 96.975v13.494" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m5.8209 129.52v13.494" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m148.01 96.731 7.1588 13.006" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m95.25 78.983v18.017h-3.175v10.01m0 16.952h52.917l13.018-9.8604-2.9499-4.5641m-6.9301-12.591-6.8488-17.94" stroke="#000" stroke-width="1.0583"/>
                <path d="m73.554 154.12v47.923m0 10.371v12.086h-67.733v-14.023m0-13.229v-21.696m0-13.494v-7.9375" stroke="#000" stroke-width="1.0583"/>
                <path d="m5.8209 162.06v13.494" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m5.8209 197.25v13.229" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m92.074 123.43 0.0011 70.912m1.69e-4 10.052 3e-5 2.1164 39.158-1e-3 6e-5 15.345h43.921v5.2917h25.929v-6.0854m0-12.7v-2.3812h-10.848m-7.4083 0h-7.673v18.152" stroke="#000" stroke-width="1.0583"/>
                <path d="m210.25 150.76 6.9134 5.1944 5.4807 8.41 1.8899 9.8274-1.7009 9.3549-5.1972 8.41-7.9842 5.9152" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m158.01 114.1 9.5469 11.24 5.4806 5.1972 10.489 8.3155 10.149 6.8358v4.7303h14.758l2.0045 0.48144m-0.60136 46.839-5.3454 1.8921h-3.4071v6.1928" stroke="#000" stroke-width="1.0583"/>
                <path d="m201.08 208.36v12.7" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m5.8209 224.77v8.2021m0 13.494v15.081m0 13.494v16.14h31.75v-32.808h35.983v-15.346m0-10.054v-8.2682" stroke="#000" stroke-width="1.0583"/>
                <path d="m5.8209 232.97v13.494" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m5.8209 261.55v13.494" stroke="#2196ff" stroke-width=".79375"/>
                <path d="m73.554 258.37h7.4083m8.9958 0h9.525v32.808h-61.667" stroke="#000" stroke-width="1.0583"/>
                <path d="m52.917 277.42h4.2334m6.8792 0h8.2021m7.1438 0h7.1438m7.4083 0h5.5468" stroke="#000" stroke-width="1.0583"/>
                <path d="m52.917 291.29v-16.511m0-7.1624v-9.4016" stroke="#000" stroke-width="1.0583"/>
                <path d="m68.792 291.15v-13.497" stroke="#000" stroke-width="1.0583"/>
                <path d="m83.608 291.22v-13.497" stroke="#000" stroke-width="1.0583"/>
                <path d="m92.34 214.45c-0.02975 3.1062 1.2846 6.4521 3.6785 8.435 2.3938 1.9829 5.8814 2.8297 11.138 2.6775" stroke="#000" stroke-width="1.0583"/>
                <path d="m99.483 291.18h42.333v-32.808h-8.9958m-19.579 0h-13.768" stroke="#000" stroke-width="1.0583"/>
                <path d="m142.08 291.18h17.198v-32.808h-3.175m-9.525 0h-4.4294" stroke="#000" stroke-width="1.0583"/>
                <path d="m159.28 258.11v-9.3549m0-16.206v-10.687" stroke="#000" stroke-width="1.0583"/>
                <path d="m176.48 257.84h53.181" stroke="#000" stroke-width="1.0583"/>
                <path d="m200.82 227.15h28.84v30.578" stroke="#000" stroke-width="1.0583"/>
                <path d="m159.54 291.18h70.115v-33.64" stroke="#000" stroke-width="1.0583"/>
                <path d="m206.9 227.11v30.2" stroke="#000" stroke-width="1.0583"/>
                <path d="m208.23 228.47h20.108v28.046h-20.108z" stroke="#000" stroke-width=".52917"/>
                <path d="m208.23 228.47 20.108 28.046" stroke="#000" stroke-width=".52917"/>
                <path d="m228.34 228.47-20.108 28.046" stroke="#000" stroke-width=".52917"/>
                <path transform="translate(0 19.187)" d="m130.18 128.06h7.9375v7.9375h-7.9375z" stroke="#000" stroke-width="1.0583"/>
                <path d="m92.075 164.12c0.10628 11.053 8.2036 13.828 12.328 13.825l14.879-9e-3 -14.916-9e-3c-4.2731-3e-3 -11.281 1.2128-12.291 10.618" stroke="#000" stroke-width="1.0583"/>
            </g>
            <g id="rooms" fill="none">
                <path data-zone-id="4" transform="translate(0 -19.187)" d="m73.554 27.295 48.154-3.8744 5e-3 22.754h-29.638l0.0113 3.176-18.532 0.01786z"/>
                <path data-zone-id="3"   onClick={(e)=>makeMassage(e)} transform="translate(0 -19.187)" d="m92.075 46.175h54.788l4.4745 9.6127v13.263l-6.0809 9.9323h-53.181z"/>
                <path data-zone-id="2" transform="translate(0 -19.187)" d="m92.075 97h3.175v-18.017l46.031 0.02344 6.7295 17.724 7.1588 13.006 2.8405 4.3653-13.018 9.8604h-52.917z"/>
                <path data-zone-id="7" transform="translate(0 -19.187)" d="m5.8209 82.631h67.733v71.494h-67.733z"/>
                <path data-zone-id="6" transform="translate(0 -19.187)" d="m5.8209 154.12h67.733v70.578l-67.733-0.19843z"/>
                <path data-zone-id="1" transform="translate(0 -19.187)" d="m92.075 123.96h52.917l13.018-9.8604 7.0304 8.5169 7.9971 7.9204 10.489 8.3155 10.149 6.8358v4.7303h14.758l2.0045 0.48144 6.7291 5.0559 5.4807 8.41 1.8899 9.8274-1.7009 9.3549-5.1972 8.41-7.9842 5.9152-5.164 1.7577h-3.4071v27.517h-25.929v-5.2917h-43.921l-6e-5 -15.345-39.158 1e-3z"/>
                <path data-zone-id="5" transform="translate(0 -19.187)" d="m73.554 224.5v33.867h-35.983v32.808h-31.75v-66.41z"/>
            </g>
        </svg>


    )
};
export default Floor3