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
			
		if((!base_found)||(!stackframe_found)||(!j2_found)||(!j1_found))
		//if(!allOffsetsFound)
		{
			if((firstRun)||(!base_found))
			{
				
				// Reset Addresses
				resetOffsetAddresses();
				
				//Set Pointer Values
				setDefaultPointerValues();
				setCustomPointerValues();
				
				// Prevent Running More Than Once
				firstRun=false;
			}
			
			if(search_base_offset_adjust<search_base_offset_max){search_base_offset_adjust+=0x10000;}
			
			// Find File Pointers
			showFoundOffsets(offset_find_base_fp);
			if(!base_found)
			{
				findBase();
				if((base_found)&&(base_fp_addr!=0)&&(basev!=0x00300030)&&(basev!="NaN)")){base_fp_addr=base_offsets[0];basev=checkMemory(base_fp_addr-0x4,0x1000,base_fp.length,6);}else{base_found=false;findBase();}
				//checkOffsets();
				showFoundOffsets(offset_find_base_fp);
			}
			//if(base_found){basev=checkMemory(base_fp_addr-0x4,0x1000,base_fp.length,6);}
			
			// Find Stackframe Pointer
			showFoundOffsets(offset_find_stack_frame);
			if(!stackframe_found)
			{
				findStackFrame();
				if((stackframe_found)&&(stack_frame_addr!=0)&&(stkv!=0x00300030)&&(stkv!="NaN)")){stack_frame_addr=stack_offsets[0];stkv=checkMemory(stack_frame_addr-0x4,0x20000,stack_frame.length,6);}else{stackframe_found=false;findStackFrame();}
				//checkOffsets();
				showFoundOffsets(offset_find_stack_frame);
			}
			//if(stackframe_found){stkv=checkMemory(stack_frame_addr-0x4,0x20000,stack_frame.length,6);}
			
			// Find Jump 2 Pointer
			showFoundOffsets(offset_find_jump2);
			if(!j2_found)
			{
				findJump2();
				if((j2_found)&&(jump_2_addr!=0)&&(j2v!=0x00300030)&&(j2v!="NaN)")){jump_2_addr=jump2_offsets[0];j2v=checkMemory(jump_2_addr-0x4,0x1000,jump_2.length,6);}else{j2_found=false;findJump2();}
				//checkOffsets();
				showFoundOffsets(offset_find_jump2);
			}
			//if(j2_found){j2v=checkMemory(jump_2_addr-0x4,0x1000,jump_2.length,6);}
			
			// Find Jump 1 Pointer
			showFoundOffsets(offset_find_jump1);
			if(!j1_found)
			{
				findJump1();
				if((j1_found)&&(jump_1_addr!=0)&&(j1v!=0x00300030)&&(j1v!="NaN)")){jump_1_addr=jump1_offsets[0];j1v=checkMemory(jump_1_addr-0x4,0x1000,jump_1.length,6);}else{j1_found=false;findJump1();}
				//checkOffsets();
				showFoundOffsets(offset_find_jump1);
			}
			//if(j1_found){j1v=checkMemory(jump_1_addr-0x4,0x1000,jump_1.length,6);}
		}
		
		if((base_found)&&(stackframe_found)&&(j2_found)&&(j1_found))
		{
			allOffsetsFound=true;
			showFoundOffsets(offset_find_success);
		}
		else
		{
			allOffsetsFound=false;
			showFoundOffsets(offset_find_success);
		}
		
		// Trigger Exploit
		if((base_found)&&(stackframe_found)&&(j2_found)&&(j1_found)&&(!allOffsetsVerified))
		{
			verifyOffsets();
		}
		
		if((base_verified)&&(stackframe_verified)&&(j2_verified)&&(j1_verified))
		{
				verifySuccessTrigger();
		}
		else 
		{
			logAdd("RELOADING FROM NOT FOUND + VERIFIED!!!", log_div);
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
