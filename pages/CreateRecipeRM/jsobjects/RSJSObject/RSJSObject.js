export default  {
  onClick: () => {
    const APIResponse = Service_Report.data;
    const binaryCode = APIResponse; // Assuming the binary code is stored in APIResponse
	
    const binaryData = new Uint8Array(binaryCode.length);
    for (let i = 0; i < binaryCode.length; i++) {
      binaryData[i] = binaryCode.charCodeAt(i);
    }
    const blob = new Blob([binaryData], { type: 'application/pdf' });

    // Create a temporary URL for the Blob
    const fileUrl = URL.createObjectURL(blob);

    storeValue('file_url',fileUrl);
		
  },
	OnsubstringBefore:(emailid)=>{
    let str=appsmith.user.name;
    if (str==null ){
        str=emailid;
      const val =str.split("@");
       return val[0];
    }
    else{
        return str;
    }
  }
};