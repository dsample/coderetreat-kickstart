using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DevTest.CSharp.Test
{
    [TestFixture]
    public class Class1Test
    {
        [Test]
        public void Hello_WhenCalled_ShouldReturnHi()
        {
            var hello = new Class1();
            Assert.That(hello.Hello(), Is.EqualTo("hi"));
        }
    }
}
