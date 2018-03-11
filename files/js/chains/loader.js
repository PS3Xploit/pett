// PS3 Default Template ROP Chain Loader
// PS3Xploit Team 2018 / ps3xploit.com


//function initROP(type)
function initROP()
{
	try
	{
		// ==============================================================================
		// Set basic defaults for each loop
		initRopDefaults();
			
		// Check to make sure values are not corrupt
		checkSearchParams();
			
		if((firstRun)||(!base_found))
		{
			
			// Reset Addresses
			resetOffsetAddresses();
			
			//Set Pointer Values
			setDefaultPointerValues();
			setCustomPointerValues();
	
			//removeElement("rop_chain_view", true);
			
			// Prevent Running More Than Once
			firstRun=false;
		}
		// ==============================================================================
		
		
		// ==============================================================================
		// Find File Pointers
		showFoundOffsets(offset_find_base_fp);
		if((!base_found)&&(!stackframe_found)&&(!j2_found)&&(!j1_found)){base_found=findBase();}
		showFoundOffsets(offset_find_base_fp);
		
		// Find Stackframe Pointer
		showFoundOffsets(offset_find_stack_frame);
		if((base_found)&&(!stackframe_found)&&(!j2_found)&&(!j1_found)){stackframe_found=findStackFrame();}
		showFoundOffsets(offset_find_stack_frame);
		
		// Find Jump 2 Pointer
		showFoundOffsets(offset_find_jump2);
		if((base_found)&&(stackframe_found)&&(!j2_found)&&(!j1_found)){j2_found=findJump2();}
		showFoundOffsets(offset_find_jump2);
		
		// Find Jump 1 Pointer
		showFoundOffsets(offset_find_jump1);
		if((base_found)&&(stackframe_found)&&(j2_found)&&(!j1_found)){j1_found=findJump1();}
		showFoundOffsets(offset_find_jump1);
		// ==============================================================================
		
		
		// ==============================================================================
		if((base_found)&&(stackframe_found)&&(j2_found)&&(j1_found)){allOffsetsFound=true;showFoundOffsets(offset_find_success);}
		
		// Trigger Exploit
		if(!allOffsetsVerified){verifyOffsets();}
		
		if(allOffsetsVerified)
		{
			// Land here ONLY when all offsets are verified
			verifySuccessTrigger();
		}
		else 
		{
			verifyFailTrigger();
		}
		// ==============================================================================
		
		// Log Crap For Garbage Collection
		logForGC();
	} 
	catch(e) 
	{
		if(debug_mode){logAdd(e, log_div);}
	}
}
