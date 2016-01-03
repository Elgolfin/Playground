using JobInterviewTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace JobInterviewTestsUnitTests
{
    
    
    /// <summary>
    ///This is a test class for StringHelperTest and is intended
    ///to contain all StringHelperTest Unit Tests
    ///</summary>
    [TestClass()]
    public class StringHelperTest
    {


        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion

        /// <summary>
        /// A test for ReverseStringRecursive
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringRecursiveTestClassic()
        {
            string inputString = "Nicolas";
            string expected = "salociN";
            string actual;
            actual = StringHelper.ReverseStringRecursive(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringRecursive with an empty input string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringRecursiveTestEmptyString()
        {
            string inputString = "";
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringRecursive(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringRecursive with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringRecursiveTestOneCharString()
        {
            string inputString = "a";
            string expected = "a";
            string actual;
            actual = StringHelper.ReverseStringRecursive(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringRecursive with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringRecursiveTestNullString()
        {
            string inputString = null;
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringRecursive(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringXor
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringXorTestClassic()
        {
            string inputString = "Nicolas";
            string expected = "salociN";
            string actual;
            actual = StringHelper.ReverseStringXor(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringXor with an empty input string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringXorTestEmptyString()
        {
            string inputString = "";
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringXor(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringXor with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringXorTestOneCharString()
        {
            string inputString = "a";
            string expected = "a";
            string actual;
            actual = StringHelper.ReverseStringXor(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringXor with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringXorTestNullString()
        {
            string inputString = null;
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringXor(inputString);
            Assert.AreEqual(expected, actual);
        }


        /// <summary>
        /// A test for ReverseStringSB
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringSBTestClassic()
        {
            string inputString = "Nicolas";
            string expected = "salociN";
            string actual;
            actual = StringHelper.ReverseStringSB(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringSB with an empty input string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringSBTestEmptyString()
        {
            string inputString = "";
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringSB(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringSB with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringSBTestOneCharString()
        {
            string inputString = "a";
            string expected = "a";
            string actual;
            actual = StringHelper.ReverseStringSB(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringSB with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringSBTestNullString()
        {
            string inputString = null;
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringSB(inputString);
            Assert.AreEqual(expected, actual);
        }


        /// <summary>
        /// A test for ReverseStringArray
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringArrayTestClassic()
        {
            string inputString = "Nicolas";
            string expected = "salociN";
            string actual;
            actual = StringHelper.ReverseStringArray(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringArray with an empty input string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringArrayTestEmptyString()
        {
            string inputString = "";
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringArray(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringArray with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringArrayTestOneCharString()
        {
            string inputString = "a";
            string expected = "a";
            string actual;
            actual = StringHelper.ReverseStringArray(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringArray with a null string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringArrayTestNullString()
        {
            string inputString = null;
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringArray(inputString);
            Assert.AreEqual(expected, actual);
        }



        /// <summary>
        /// A test for ReverseStringIEnumerableChar
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringIEnumerableCharTestClassic()
        {
            string inputString = "Nicolas";
            string expected = "salociN";
            string actual;
            actual = StringHelper.ReverseStringIEnumerableChar(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringIEnumerableChar with an empty input string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringIEnumerableCharTestEmptyString()
        {
            string inputString = "";
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringIEnumerableChar(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringIEnumerableChar with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringIEnumerableCharTestOneCharString()
        {
            string inputString = "a";
            string expected = "a";
            string actual;
            actual = StringHelper.ReverseStringIEnumerableChar(inputString);
            Assert.AreEqual(expected, actual);
        }

        /// <summary>
        /// A test for ReverseStringIEnumerableChar with an 'one character' string
        ///</summary>
        [TestMethod()]
        [DeploymentItem("JobInterviewTests.exe")]
        public void ReverseStringIEnumerableCharTestNullString()
        {
            string inputString = null;
            string expected = "";
            string actual;
            actual = StringHelper.ReverseStringIEnumerableChar(inputString);
            Assert.AreEqual(expected, actual);
        }
    }
}
