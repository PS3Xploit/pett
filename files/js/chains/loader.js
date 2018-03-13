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
		//if(firstRun)
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
		
		basev=checkMemory(base_fp_addr-0x4,0x1000,base_fp.length,6);
		if((base_found)&&(base_fp_addr!=0)&&(basev!=0x00300030)&&(basev!="NaN)")){base_fp_addr=base_offsets[0];}
		//if((base_found)&&(base_fp_addr!=0)){base_fp_addr=base_offsets[0];}
		//if((base_verified)&&(base_fp_addr!=0)){base_fp_addr=base_offsets[0];}
		//if(!base_found){findBase();}
		//if(!base_found){reloadInitROP();}
		checkOffsets();
		showFoundOffsets(offset_find_base_fp);
		
		// Find Stackframe Pointer
		showFoundOffsets(offset_find_stack_frame);
		if((base_found)&&(!stackframe_found)&&(!j2_found)&&(!j1_found)){stackframe_found=findStackFrame();}
		if((base_found)&&(!stackframe_found)&&(j2_found)&&(!j1_found)){stackframe_found=findStackFrame();}
		if((base_found)&&(!stackframe_found)&&(j2_found)&&(j1_found)){stackframe_found=findStackFrame();}
		
		stkv=checkMemory(stack_frame_addr-0x4,0x10000,stack_frame.length,6);
		if((stackframe_found)&&(stack_frame_addr!=0)&&(stkv!=0x00300030)&&(stkv!="NaN)")){stack_frame_addr=stack_offsets[0];}
		//if((stackframe_found)&&(stack_frame_addr!=0)){stack_frame_addr=stack_offsets[0];}
		//if((stackframe_verified)&&(stack_frame_addr!=0)){stack_frame_addr=stack_offsets[0];}
		//if(!stackframe_found){findStackFrame();}
		//if(!stackframe_found){reloadInitROP();}
		checkOffsets();
		showFoundOffsets(offset_find_stack_frame);
		
		// Find Jump 2 Pointer
		showFoundOffsets(offset_find_jump2);
		if((base_found)&&(stackframe_found)&&(!j2_found)&&(!j1_found)){j2_found=findJump2();}
		if((base_found)&&(stackframe_found)&&(!j2_found)&&(j1_found)){j2_found=findJump2();}
		
		j2v=checkMemory(jump_2_addr-0x4,0x1000,jump_2.length,6);
		if((j2_found)&&(jump_2_addr!=0)&&(j2v!=0x00300030)&&(j2v!="NaN)")){jump_2_addr=jump2_offsets[0];}
		//if((j2_found)&&(jump_2_addr!=0)){jump_2_addr=jump2_offsets[0];}
		//if((j2_verified)&&(jump_2_addr!=0)){jump_2_addr=jump2_offsets[0];}
		//if(!j2_found){findJump2();}
		//if(!j2_found){reloadInitROP();}
		checkOffsets();
		showFoundOffsets(offset_find_jump2);
		
		// Find Jump 1 Pointer
		showFoundOffsets(offset_find_jump1);
		if((base_found)&&(stackframe_found)&&(j2_found)&&(!j1_found)){j1_found=findJump1();}
		
		j1v=checkMemory(jump_1_addr-0x4,0x1000,jump_1.length,6);
		if((j1_found)&&(jump_1_addr!=0)&&(j1v!=0x00300030)&&(j1v!="NaN)")){jump_1_addr=jump1_offsets[0];}
		//if((j1_verified)&&(jump_1_addr!=0)){jump_1_addr=jump1_offsets[0];}
		//if(!j1_found){findJump1();}
		//if(!j1_found){reloadInitROP();}
		checkOffsets();
		showFoundOffsets(offset_find_jump1);
		// ==============================================================================
		
		
		// ==============================================================================
		if((base_found)&&(stackframe_found)&&(j2_found)&&(j1_found))
		{
			allOffsetsFound=true;
			showFoundOffsets(offset_find_success);
		}
		else
		{
			allOffsetsFound=false;
			if(!base_found){base_found=findBase();}
			if(!stackframe_found){stackframe_found=findStackFrame();}
			if(!j2_found){j2_found=findJump2();}
			if(!j1_found){j1_found=findJump1();}
			//reloadInitROP();
		}
		
		// Trigger Exploit
		if((allOffsetsFound)&&(!allOffsetsVerified)){verifyOffsets();}
		//if((allOffsetsFound)&&(!allOffsetsVerified)){verifyOffsets();}else{allOffsetsFound=false;}
		
		if((allOffsetsFound)&&(allOffsetsVerified))
		{
			//verifyOffsets();
			
			// Land here ONLY when all offsets are verified
			if((base_verified)&&(stackframe_verified)&&(j2_verified)&&(j1_verified))
			{
				
				verifySuccessTrigger();
			}
		}
		else 
		{
			verifyFailTrigger();
			reloadInitROP();
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
