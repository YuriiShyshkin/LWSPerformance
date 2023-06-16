# LWS Performance issue.

### Preconditions:
* Ensure that an org has Summer'23 Salesforce Release.
* Create static resource with JSZip.js file and name it "JSZip".
* Create Aura component with files from LoadZipFiles folder.
* Create Lightning Component Tab LoadZipFiles with created LoadZipFiles Aura Component.

### Steps to reproduce Custom logic issue:
1. Enable [LWS](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_enable).
2. Open LoadZipFiles tab.
3. Make sure that toggle is unchecked("Custom Code" under the toggle).
4. Opend DevTools -> Console and clear logs.
5. Select in "Count of iterations" picklist the 1000000 value.
6. Click "Run Custom Code" button.
7. The page becomes unresponsive on 3-6 sec and in DevTools logs will bee meassage with time of operation.

Repeat the steps with different values from **"Count of iterations"** picklist to see how operation time increases when the **"Count of iterations"** value increases.

The operation time in DevTools logs will be less in 3 times for each value from **"Count of iterations"** picklist when **LWS is disabled**.

**For example:**

When LWS is enabled and "Count of iterations" is 1000000 the time of opeeration is 3 sec.

When LWS is disabled and "Count of iterations" is 1000000 the time of opeeration is 1 sec

### Steps to reproduce JSZip library issue:
1. Enable [LWS](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_enable).
2. Open LoadZipFiles tab.
3. Make sure that toggle is checked("Lib" under the toggle).
4. Opend DevTools -> Console and clear logs.
5. Click "Choose Files" and select files from folder FilesToAttach.
6. The page becomes unresponsive on 35-40 sec and the operation time in DevTools logs will be near 35-40 sec.
7. The operation time will be shown in DevTools logs.
 
There is no page freezing when **LWS is disabled** and the operation time is less than 1 sec in DevTools logs.
